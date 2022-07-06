import express from "express";
import { createUser, deleteUser, getallUser, getUser, updateeUser } from "../controllers/users.js";
const router = express.Router();

//create
router.post("/", createUser)


//update
router.put("/:id", updateeUser)


//delete
router.delete("/:id", deleteUser)



//get
router.get("/:id", getUser)

//getall
router.get("/", getallUser)

export default router;