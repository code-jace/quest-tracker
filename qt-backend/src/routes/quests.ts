import express, { Request, Response } from 'express';
import Quest, { IQuest } from '../models/Quest';

const router = express.Router();

// Create a quest
router.post('/', async (req: Request, res: Response) => {
  const { title, description, adventureId } = req.body;
  try {
    const quest: IQuest = new Quest({ title, description, adventure: adventureId });
    await quest.save();
    res.json(quest);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

// Get all quests
router.get('/', async (req: Request, res: Response) => {
  try {
    const quests = await Quest.find().populate('adventure');
    res.json(quests);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

export default router;