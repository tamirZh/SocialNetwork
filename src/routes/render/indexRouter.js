import express from 'express';
import { User, Album, Image } from '../../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const allUsers = await User.findAll();
  // const filtered = allUsers.filter((el) => el.id !== res.locals.user.id);
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

router.get('/albums', async (req, res) => {
  const allAlbums = await Album.findAll({ where: { userId: res.locals.user.id } });
  const initState = { allAlbums };
  res.render('AlbumsPage', initState);
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const myImages = await Image.findAll({
      where: { albumId: id },
    });
    const initState = { myImages };
    res.render('ImagesPage', initState);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default router;
