import express from "express";
import { allTeam, createTeam } from "../Contoller/TeamContoller.js";

// init router

const router = express.Router();

// create routes
router.get("/", allTeam);
router.post("/", createTeam);

// export default router

export default router;
