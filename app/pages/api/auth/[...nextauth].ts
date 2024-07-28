import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import mongoose from "mongoose";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI ?? "";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? "";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "";
const ADMIN_NAME = process.env.ADMIN_NAME ?? "";
const SECRET = process.env.SECRET ?? "";

const clientPromise = MongoClient.connect(MONGO_URI);

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Add your own logic here to fetch user from your database
        if (credentials?.email === ADMIN_EMAIL && credentials?.password === ADMIN_PASSWORD) {
          // Return a user object that matches the shape NextAuth expects
          return {
            id: new mongoose.Types.ObjectId().toString(), // Convert ObjectId to string
            name: ADMIN_NAME,
            email: ADMIN_EMAIL
          };
        }
        return null;
      }
    }),
  ],
  adapter: MongoDBAdapter(clientPromise),
  secret: SECRET,
  pages: {
    signIn: "/login",
    signOut: "/logout",
    error: "/login", // Show error page instead of a modal
  },
  // ... rest of your NextAuth configuration
});