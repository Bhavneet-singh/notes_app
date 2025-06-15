import express from "express";
import { getAllNotes , createNote , deleteNote , updateNote } from "../controller/notesController.js";

const router = express.Router() ; 


router.get("/" , getAllNotes);

router.post("/" , createNote );

router.delete("/:id" , updateNote);

router.patch("/:id" , deleteNote);


export default router ;