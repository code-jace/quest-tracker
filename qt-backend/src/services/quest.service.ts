import { ObjectId } from 'mongoose';
import { IAdventure } from '../models/adventure.model';
import { Quest, IQuest } from '../models/quest.model';

export const getAllQuests = async (): Promise<IQuest[]> => {
  return await Quest.find();
};

export const getQuestById = async (id: string): Promise<IQuest | null> => {
  return await Quest.findById(id);
};

export const createQuest = async (name: string, description: string, adventure?: string): Promise<IQuest> => {
  const quest = new Quest({
    name,
    description,
    adventure, // Pass adventure if provided
  });

  return await quest.save();
};

export const updateQuest = async (id: string, name: string, description: string, adventure?: ObjectId): Promise<IQuest | null> => {
  const quest = await Quest.findById(id);
  
  if (!quest) {
    return null;
  }

  quest.name = name ?? quest.name;
  quest.description = description ?? quest.description;
  quest.adventure = adventure ?? quest.adventure;

  return await quest.save();
};

export const deleteQuest = async (id: string): Promise<IQuest | null> => {
  return await Quest.findByIdAndDelete(id);
};
