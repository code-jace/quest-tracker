import { Adventure, IAdventure } from '../models/adventure.model';
import { IQuest, Quest } from '../models/quest.model';

export const getAllAdventures = async (): Promise<IAdventure[]> => {
  return await Adventure.find().populate('quests');
};

export const getAdventureById = async (id: string): Promise<IAdventure | null> => {
  return await Adventure.findById(id).populate('quests');
};

export const createAdventure = async (name: string, description: string, quests: string[]): Promise<IAdventure> => {
  const adventure = new Adventure({
    name,
    description,
    quests: quests.map(questId => questId)
  });

  return await adventure.save();
};

export const updateAdventure = async (id: string, name: string, description: string, quests: IQuest[]): Promise<IAdventure | null> => {
  const adventure = await Adventure.findById(id);
  
  if (!adventure) {
    return null;
  }

  adventure.name = name ?? adventure.name;
  adventure.description = description ?? adventure.description;
  adventure.quests = quests;

  return await adventure.save();
};

export const deleteAdventure = async (id: string): Promise<IAdventure | null> => {
    return await Adventure.findByIdAndDelete(id);
  };
