import express from 'express';
import {
  Image, Album, User, Comment,
} from '../../../db/models';
import checkAuthor from '../../middlewares/checkAuthor';

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const comments = await Comment.findAll({
      where: { imageId: id },
      include: { User },
    });
    const imgById = await Image.findOne({
      where: { id },
      include: { Album },
    });
    const initState = { imgById, comments };
    res.render('OneImagePage', initState);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post('/album/add', async (req, res) => {
  try {
    if (!req.body) return res.status(500).json({ message: 'Empty title' });
    const newAlbum = await Album.create({ ...req.body, userId: res.locals.user.id });
    res.json(newAlbum);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.delete('/album/:id', async (req, res) => {
  console.log(req.params, '-------->>>>');
  try {
    const { id } = req.params;
    await Album.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

router.post('/image/add', async (req, res) => {
  try {
    const newImage = await Image.create({ ...req.body, albumId: re });
  } catch (error) {

  }
});

router.delete('/image/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Image.destroy({ where: { id } });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default router;
