import { MongoClient } from "mongodb";
import { createHmac } from "crypto";

const connectionString =
  "mongodb+srv://ecom123456:SSNuhM3vdKkJMCCw@ecom.u9fap.mongodb.net/fsb?retryWrites=true&w=majority";

let client;
let db;

export function ConnectDb() {
  try {
    client = new MongoClient(connectionString);
    client.connect((err) => {
      db = client.db("fsb");
      console.log("Connected to database.");
    });
  } catch (error) {
    console.log(error);
  }
}

//Adds a document to collection
export async function SaveToDb(col, data) {
  try {
    return await db.collection(col).insertOne(data);
  } catch (error) {
    console.log(error);
  }
}

//Retrieves a document from the collection
export async function GetFromDb(col, item) {
  try {
    return await db.collection(col).find(item).toArray();
  } catch (error) {
    console.log(error);
  }
}

//Removes a document from the collection
export async function RemoveFromDb(col, item) {
  try {
    return await db.collection(col).deleteOne(item);
  } catch (error) {
    console.log(error);
  }
}

//Used to hash a password
export function HashString(str) {
  return createHmac("sha256", str).update("secretPassw0rd").digest("hex");
}

process.on("exit", () => client.close());
process.on("uncaughtException", (error) => {
  console.log(error);
  client.close();
});
