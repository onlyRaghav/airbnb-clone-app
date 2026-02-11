import app from "./app.js";
import dotenv from "dotenv";
dotenv.config({quiet:true});
const PORT= process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`)
})