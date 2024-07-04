import { Quest } from './quest';

export interface Adventure {
    _id: string; // Assuming id is a string, adjust as per your backend
    name: string;
    description: string;
    quests: Quest[]; // Assuming quests are a nested array of Quest objects
  }
  