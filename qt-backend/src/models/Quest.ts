import mongoose, { Document, Schema } from 'mongoose';
import { IAdventure } from './Adventure';

export interface IQuest extends Document {
  title: string;
  description: string;
  adventure?: IAdventure['_id'];
}

const questSchema: Schema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  adventure: { type: mongoose.Schema.Types.ObjectId, ref: 'Adventure' },
});

const Quest = mongoose.model<IQuest>('Quest', questSchema);
export default Quest;