import express from "express"
import { createNote, deleteNoteById, getAllNotes, getNoteById } from "../controllers/note";

const router = express.Router();

router.get('/notes',getAllNotes)
router.post('/notes',createNote)

router.get('/notes/:id', getNoteById)
router.delete('/notes/:id', deleteNoteById)

export default router;