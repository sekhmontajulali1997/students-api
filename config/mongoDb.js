import mongoose from "mongoose";

const mongoDbConnaction = async () =>{
try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log(`mongoDB connnaction Success`.bgBlue.black);
} catch (error) {
    console.log(`mongoDB connnaction failed`.bgRed.black);
}
}

export default mongoDbConnaction