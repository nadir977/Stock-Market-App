import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config(); // 👈 load .env file

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function testConnection() {
  try {
    await client.connect();
    console.log("✅ MongoDB connection successful!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
  } finally {
    await client.close();
  }
}

testConnection();
