import express, { Request, Response } from 'express';
import Adventure, { IAdventure } from '../models/Adventure';

const router = express.Router();

// Create an adventure
router.post('/', async (req: Request, res: Response) => {
  const { title, description, questIds } = req.body;
  try {
    const adventure: IAdventure = new Adventure({ title, description, quests: questIds });
    await adventure.save();
    res.json(adventure);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Get all adventures
router.get('/', async (req: Request, res: Response) => {
  try {
    const adventures = await Adventure.find().populate('quests');
    res.json(adventures);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;