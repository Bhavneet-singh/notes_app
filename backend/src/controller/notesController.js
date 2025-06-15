import Note from "../models/Note.js";


export async function getAllNotes(req , res){
    try {
        const notes = await Note.find().sort({createdAt : -1}) ; // newest firstly 
        res.status(200).json(notes);
    } catch (error) {
        console.log("Error in getAll controller" , error);
        res.status(500).json({msg : "Internal Server Error"});
    }
}

export async function createNote(req , res){
    try {
        const {title , content } = req.body ; 
        const newNote = new Note({title , content}) ; 

        const savedNote = await newNote.save() ; 
        res.status(201).json(savedNote); 
    } catch (error) {
        console.log("Error in createNote controller" , error);
        res.status(500).json("Internal Server Error")
    }

}

export async function getNoteById(req , res){   
    try {
        
        const note = await Note.findById(req.params.id) ;
        if(!note) return res.status(404).json({msg : "Note not found"}) ; 
        res.status(200).json(note);

    } catch (error) {
        console.log("Error in getNoteById controller" , error);
        res.status(500).json("Internal Server Error");
        
    }}

export async function updateNote(req , res){
    try {
        const {title , content } = req.body ; 
        const updatedNote = await Note.findByIdAndUpdate(req.params.id , {title , content} , {
            new : true ,
        }) ;
        if(!updatedNote) return res.status(404).json({msg : "Note not found"}) 
        res.status(200).json({message : "Note updated successfully"})
    }
     catch (error) {

        console.log("Error in updateNote controller" , error) ; 
        res.status(500).json("Internal Server Error")
        
    }
}

export async function deleteNote(req , res){
     try { 
        const toDeleteNote = await Note.findByIdAndDelete(req.params.id ) ;
        if(!toDeleteNote) return res.status(404).json({msg : "Note not found"}) 
        res.status(200).json({message : "Note updated successfully"})
    }
     catch (error) {
        console.log("Error in deleteNote controller" , error) ; 
        res.status(500).json("Internal Server Error");
        
    }
    
}
