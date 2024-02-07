import mongoose from "mongoose";

export async function connect() {
    try {
       mongoose.connect(process.env.MONGODB_URI!);
        const connection = mongoose.connection;
        connection.on('connected', ()=>{
            console.log("MongoDB connected successfully");
        })
        connection.on('error', (err)=>{
            console.log(`Error connecting to MongoDB: ${err}`);
            process.exit();
        });
        
    } catch (error) {
        console.log('something went wrong');
        console.log(error);
    }
    
}