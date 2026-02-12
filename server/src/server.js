import "dotenv/config";
import app from "./app.js";
import dotenv from "dotenv";
import { connectToDb } from "./config/db.js";

const startServer = async ()=>{
    const PORT=process.env.PORT;

    try{
        await connectToDb();
        console.log(`API is running on http://localhost:${PORT}`);
    }catch(err){
        console.error("Failed to start server: ",err);
        process.exit(1);
    }
}
startServer();