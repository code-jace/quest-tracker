import mongoose, { Document, Schema } from 'mongoose';
import { IQuest } from './Quest';

export interface IAdventure extends Document {
  title: string;
  description: string;
  quests: IQuest['_id'][];
}

const adventureSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  quests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Quest' }],
});

const Adventure = mongoose.model<IAdventure>('Adventure', adventureSchema);
export default Adventure;