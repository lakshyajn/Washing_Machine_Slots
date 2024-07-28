import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient>;
  var mongoose: {
    conn: any; // Replace 'any' with the actual type of conn
    promise: any; // Replace 'any' with the actual type of promise
  };
}