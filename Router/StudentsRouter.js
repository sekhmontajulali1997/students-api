import express from "express";
import {
  createStudents,
  allStudents,
  eeditStudents,
  DeleteStudents,

} from "../Contoller/StudentsContoller.js";
import { varifyToken } from "../Middleware/VarifyToken.js";

// init router

const router = express.Router();


// verify token
router.use(varifyToken);

// create routes
router.get("/", allStudents);
router.post("/", createStudents);
router.patch("/:id", eeditStudents);
router.delete("/:id", DeleteStudents);


// export default router

export default router;
