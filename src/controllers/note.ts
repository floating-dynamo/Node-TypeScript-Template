import { Request, Response } from "express";
import Note, { INote } from "../models/note";

export const getAllNotes = async (req: Request, res: Response) => {
  const notes = await Note.find<INote>();

  res.json({ notes, totalNotes: notes.length });
};

export const createNote = async (req: Request, res: Response) => {
  const note = new Note<INote>(req.body);

  try {
    await note.save();
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }

  res.status(201).json({
    message: "Note created!",
    note: note,
  });
};

export const deleteNoteById = async (req: Request, res: Response) => {
  try {
    const note = await Note.findByIdAndDelete<INote>(req.params.id);

    if (!note) {
      return res.status(404).json({
        message: "Note not found!",
      });
    }

    return res.json({
      message: `Note with Id:${req.params.id} deleted successfully`,
      note: note,
    });
  } catch (err) {
    return res.status(500).json({
      error: err,
    });
  }
};

export const getNoteById = async (req: Request, res: Response) => {
  try {
    const note = await Note.findById<INote>(req.params.id);

    if (!note) {
      return res.status(404).json({
        message: "Note not found!",
      });
    }

    return res.json(note);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};
