import mongoose from "mongoose";

const connectDb = async function () {
  const connection = mongoose.connect(
    `mongodb+srv://jainmrinal140:${process.env.DATABASE_PASSWORD}@cluster0.5yymuvg.mongodb.net/user_db?retryWrites=true&w=majority&appName=Cluster0`
  );
  if (connection) {
    console.log("You are connected to the database");
  }
};

export default connectDb;
