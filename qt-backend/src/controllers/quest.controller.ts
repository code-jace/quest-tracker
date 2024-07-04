import { Request, Response } from 'express';
import * as questService from '../services/quest.service';

export const getQuests = async (req: Request, res: Response) => {
  try {
    const quests = await questService.getAllQuests();
    res.json(quests);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getQuestById = async (req: Request, res: Response) => {
  try {
    const quest = await questService.getQuestById(req.params.id);
    if (!quest) {
      return res.status(404).json({ message: 'Quest not found' });
    }
    res.json(quest);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const createQuest = async (req: Request, res: Response) => {
  const { name, description, adventure } = req.body;

  try {
    const newQuest = await questService.createQuest(name, description, adventure);
    res.status(201).json(newQuest);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateQuest = async (req: Request, res: Response) => {
  const { name, description, adventure } = req.body;

  try {
    const updatedQuest = await questService.updateQuest(req.params.id, name, description, adventure);
    if (!updatedQuest) {
      return res.status(404).json({ message: 'Quest not found' });
    }
    res.json(updatedQuest);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteQuest = async (req: Request, res: Response) => {
  try {
    const deletedQuest = await questService.deleteQuest(req.params.id);
    if (!deletedQuest) {
      return res.status(404).json({ message: 'Quest not found' });
    }
    res.json({ message: 'Quest deleted' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};
