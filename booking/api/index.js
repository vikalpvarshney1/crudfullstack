import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import authroute from "./routes/auth.js"
import usersroute from './routes/users.js'
import roomsroute from './routes/rooms.js'
import hotelsroute from "./routes/hotels.js"
import cookieParser from "cookie-parser";
import cors from 'cors';
const app = express()
dotenv.config()
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to mongoDB");
    } catch (error) {
        throw error;
    }
}
mongoose.connection.on("disconnected", () => {
    console.log("mongodb disconnected");
})



// middleware
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use("/auth", authroute)
app.use("/hotels", hotelsroute)
app.use("/rooms", roomsroute)
app.use("/user", usersroute)
app.listen(8000, () => {
    connect();
    console.log("port 8000");
})