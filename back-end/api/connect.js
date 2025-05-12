// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://jrizzetto:entendido123@cluster0.jdrvxcy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

export const db = client.db("SpotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
