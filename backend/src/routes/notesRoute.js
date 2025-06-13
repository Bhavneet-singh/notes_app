import express from "express";
import { getAllNotes , createNote , deleteNote , updateNote } from "../controller/notesController.js";

const router = express.Router() ; 


router.get("/" , getAllNotes);

router.post("/" , createNote );

router.delete("/:id" , deleteNote);

router.patch("/:id" , updateNote);


export default router ;