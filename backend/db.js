import { MongoClient } from "mongodb";

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

export async function SaveToDb(col, data) {
  try {
    return await db.collection(col).insertOne(data);
  } catch (error) {
    console.log(error);
  }
}

export function CloseConnection() {
  client.close();
}
