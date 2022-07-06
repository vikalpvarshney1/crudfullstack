import express from "express";
import { createHotel, deleteHotel, getallHotel, getHotel, updateeHotel } from "../controllers/hotels.js";
const router = express.Router();
import Hotel from '../models/Hotels.js'
//create
router.post("/", createHotel)


//update
router.put("/:id", updateeHotel)


//delete
router.delete("/:id",deleteHotel)



//get
router.get("/:id", getHotel)

//getall
router.get("/", getallHotel)

export default router;