import express from "express"
import notesRoutes from "./routes/notesRoute.js"

const app = express() 


app.use("/api/notes" , notesRoutes);


app.get("/api/notes" , (req , res) => {
    res.json({"msg" : "You have requested notes route"})
})

app.listen(5000 , () => {
    console.log("server is running on port 5000")
})