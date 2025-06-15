import mongoose from "mongoose";


export async function connectDb(){

    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGOOSE CONNECTED TO DB")
    }

    catch(err){
        console.log("Error connnecting to db",err);
        process.exit(1); // exit with failure 
    }
};

