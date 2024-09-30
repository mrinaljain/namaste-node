// const { MongoClient } = require("mongodb");
import { MongoClient } from "mongodb";
// Replace the uri string with your connection string.
const uri = "mongodb+srv://mrinal:spree12345@cluster0.5yymuvg.mongodb.net/";
const uri1 =
  "mongodb+srv://mrinal:spree12345@cluster0.5yymuvg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri1);
async function run() {
  try {
    await client.connect();
    const database = client.db("HelloWorld");
    const movies = database.collection("User");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
