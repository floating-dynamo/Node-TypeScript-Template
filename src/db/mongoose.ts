import mongoose from "mongoose";

const MONGODB_URL: string =
  "mongodb://127.0.0.1:27017/node-ts-app" || process.env.MONGODB_URL;

// Connecting to MongoDB
mongoose.connect(MONGODB_URL).then(()=>{
  console.log("Connected to DB")
});
