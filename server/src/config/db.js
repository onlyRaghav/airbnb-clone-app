import mongoose from "mongoose"

export async function connectToDb(){
    const mongo_url=process.env.MONGO_URL;

    if(!mongo_url){
        console.error("mongo url not loaded from env file");
        process.exit(1);
    }
    try{
        const conn=await mongoose.connect(mongo_url);
        console.log(`server connected successfully \nHost:${conn.connection.host}`);
    }catch(err){
        console.error("Failed to connect!!\nReason:",err.message);
        process.exit(1);
    }

}

