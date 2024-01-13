import express from 'express';
import { Image, Album, User } from '../../../db/models';

const router = express.Router();

router.get('/:albumId', async (req, res) => {
  try {
    const { albumId } = req.params;
    const imgById = await Image.findOne({
      where: { id: albumId },
      include: {
        model: Album,
        include: {
          model: User,
        },
      },
    });
    const initState = { imgById };
    res.render('OneImagePage', initState);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

export default router;
