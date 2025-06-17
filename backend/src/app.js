import express from "express"
import cors from "cors";    
import dotenv from "dotenv"
import notesRoutes from "./routes/notesRoute.js"
import { connectDb } from "./config/db.js";
import rateLimiter from "./middlewares/rateLimiter.js";

dotenv.config()


const app = express() 
const PORT = process.env.PORT || 5000  ; 



//middlewares 

app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
}))
app.use(rateLimiter);


app.use("/api/notes" , notesRoutes);

//database is connected firstly then server is listening 
connectDb().then(() => {
    app.listen(PORT, () => {
    console.log("server is running on port ${PORT}")
}) 
})

