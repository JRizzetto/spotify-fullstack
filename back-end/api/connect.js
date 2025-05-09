// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://jrizzetto:entendido123@cluster0.jdrvxcy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(URI);

async function connect() {
  try {
    await client.connect();
    console.log("Conexão bem-sucedida com o MongoDB!");
  } catch (error) {
    console.log("Erro ao conectar com o MongoDB:", error);
  }
}
connect();

export const db = client.db("SpotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
