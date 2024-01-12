import express from 'express';
import { User } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const allUsers = await User.findAll();
  const initState = { allUsers };
  res.render('IndexPage', initState);
});

router.get('/auth/login', (req, res) => {
  res.render('LoginPage');
});

router.get('/auth/signup', (req, res) => {
  res.render('SignUpPage');
});

router.get('/profile', (req, res) => {
  res.render('ProfilePage');
});
router.get('/logout', (req, res) => {
  res.clearCookie('accessToken').clearCookie('refreshToken').redirect('/');
});

export default router;
