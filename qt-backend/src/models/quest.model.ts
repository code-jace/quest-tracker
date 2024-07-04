import mongoose, { Schema, Document } from 'mongoose';

export interface IQuest extends Document {
  _id: mongoose.Types.ObjectId;  // Include _id in the interface
  readonly id: string;           // Readonly id for the virtual property
  name: string;
  description: string;
  //completed: boolean;
  adventure?: Schema.Types.ObjectId; // Make adventure optional

}

const QuestSchema: Schema<IQuest> = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  //completed: { type: Boolean, default: false }
  adventure: { type: Schema.Types.ObjectId, ref: 'Adventure' }, // Optional reference to Adventure

});

// Use a function expression to ensure `this` is correctly typed
QuestSchema.virtual('id').get(function(this: IQuest) {
  return this._id.toHexString();
});

QuestSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => { delete ret._id; }
});

export const Quest = mongoose.model<IQuest>('Quest', QuestSchema);
