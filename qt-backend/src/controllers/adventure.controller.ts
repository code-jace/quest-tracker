import { Request, Response } from 'express';
import * as adventureService from '../services/adventure.service';

export const getAdventures = async (req: Request, res: Response) => {
  try {
    const adventures = await adventureService.getAllAdventures();
    res.json(adventures);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const getAdventureById = async (req: Request, res: Response) => {
  try {
    const adventure = await adventureService.getAdventureById(req.params.id);
    if (!adventure) {
      return res.status(404).json({ message: 'Adventure not found' });
    }
    res.json(adventure);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

export const createAdventure = async (req: Request, res: Response) => {
  const { name, description, quests } = req.body;

  try {
    const newAdventure = await adventureService.createAdventure(name, description, quests);
    res.status(201).json(newAdventure);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const updateAdventure = async (req: Request, res: Response) => {
  const { name, description, quests } = req.body;

  try {
    const updatedAdventure = await adventureService.updateAdventure(req.params.id, name, description, quests);
    if (!updatedAdventure) {
      return res.status(404).json({ message: 'Adventure not found' });
    }
    res.json(updatedAdventure);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteAdventure = async (req: Request, res: Response) => {
    try {
      const deletedAdventure = await adventureService.deleteAdventure(req.params.id);
      if (!deletedAdventure) {
        return res.status(404).json({ message: 'Adventure not found' });
      }
      res.json({ message: 'Adventure deleted' });
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  };