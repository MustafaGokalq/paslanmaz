import mongoose from "mongoose";


const db = async () =>{
    try {
        await mongoose.connect(process.env.DB_URL || "");
        console.log("mongoDb running")
        
    } catch (error) {
        console.log("not connect mongo")
    }
}

export default db;