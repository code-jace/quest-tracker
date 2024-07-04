import mongoose, { Schema, Document } from 'mongoose';
import { IQuest } from './quest.model';

export interface IAdventure extends Document {
  _id: mongoose.Types.ObjectId;  // Include _id in the interface
  readonly id: string;           // Readonly id for the virtual property
  name: string;
  description: string;
  quests: IQuest[];
}

const AdventureSchema: Schema<IAdventure> = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  quests: [{ type: Schema.Types.ObjectId, ref: 'Quest' }]
});

// Use a function expression to ensure `this` is correctly typed
AdventureSchema.virtual('id').get(function(this: IAdventure) {
  return this._id.toHexString();
});

AdventureSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => { delete ret._id; }
});

export const Adventure = mongoose.model<IAdventure>('Adventure', AdventureSchema);
