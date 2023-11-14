import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import mongoDbConnaction from "./config/mongoDb.js";
import ErrorHandler from "./Middleware/ErrorHandler.js";
import TeamRouer from "./Router/TeamRouter.js";
import BookRouter from "./Router/BookRouter.js";
import StudentRouter from "./Router/StudentsRouter.js";
import StudentlogRouter from "./Router/StudentsLogin.js";
import cookie from 'cookie-parser';

// environment variable

dotenv.config();

const PORT = process.env.PORT || 600;

// init express

const app = express();

// use express middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie());


// static folder

app.use(express.static("public"));



// use router

app.use('/api/v1/Team',TeamRouer);
app.use('/api/v1/Book',BookRouter);
app.use('/api/v1/Students',StudentRouter);
app.use('/api/v1/StudentsLoin',StudentlogRouter);



/**
 * 
 * 
 * app.use('/api',BookRouter);
app.use('/api/v1/Students',StudentRouter);
app.use('/api',StudentlogRouter);
 */
// errorr handler
app.use(ErrorHandler);


// server listen

app.listen(PORT, () => {
  mongoDbConnaction();
  console.log(`server is runing on ${PORT}`.bgGreen.black);
});
