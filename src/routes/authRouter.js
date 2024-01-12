import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';
import generateTokens from '../utils/generateTokens';
import cookiesConfig from '../config/cookiesConfig';
import checkAuthRedirect from '../middlewares/checkAuthRedirect';

const authRouter = express.Router();

authRouter.post('/signup', checkAuthRedirect, async (req, res) => {
  try {
    const {
      firstName, secondName, sex, password, email, image, description, dateOfBirth,
    } = req.body;

    const hash = await bcrypt.hash(password, 10);

    const [user, isCreated] = await User.findOrCreate({
      where: { email },
      defaults: {
        firstName,
        secondName,
        sex,
        email,
        image,
        password: hash,
        description,
        dateOfBirth,
      },
    });
    const plainUser = user.get();
    delete plainUser.password;

    if (!isCreated) return res.json({ message: 'Email is exist' });

    const { accessToken, refreshToken } = generateTokens({ user: plainUser });

    res
      .cookie('accessToken', accessToken, cookiesConfig.access)
      .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
      .sendStatus(200);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

authRouter.post('/login', checkAuthRedirect, async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) return res.status(400).json({ message: 'Empty data' });

    const user = await User.findOne({ where: { email } });
    if (!user) return res.status(400).json({ message: 'Invalid data' });

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(400).json({ message: "Email or password doesn't exist" });

    const plainUser = user.get();
    delete plainUser.password;
    const { accessToken, refreshToken } = generateTokens({ user: plainUser });

    res
      .cookie('accessToken', accessToken, cookiesConfig.access)
      .cookie('refreshToken', refreshToken, cookiesConfig.refresh)
      .sendStatus(200);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

export default authRouter;
