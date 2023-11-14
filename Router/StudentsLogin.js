import express from "express";
import { StudentsLogin } from "../Contoller/StudentsLoginContoller.js";

// init router

const router = express.Router();

// create routes
//router.get('/Students', StudentsLoin);
router.post("/", StudentsLogin);

// export default router

export default router;
