import mongoose from "mongoose";

export interface INote {
  title: string;
  desc: string;
}

const noteSchema = new mongoose.Schema<INote>({
  title: { type: String, required: true },
  desc: { type: String, required: true },
}, {timestamps: true});

const Note = mongoose.model<INote>("Note", noteSchema);

export default Note;
