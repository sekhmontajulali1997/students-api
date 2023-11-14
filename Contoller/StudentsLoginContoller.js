import asyncHandler from 'express-async-handler';
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Students from "../Model/StudentsModel.js";



/**
 * description : post requiest
 * routes : Students
 * mothode: post
 * access: public
 */

export const StudentsLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
  
    // validation
    if ((!email, !password)) {
      res.status(400).json({ message: `All fildes  Are Required` });
    }
  
    const StudentsLOGIN = await Students.findOne({ email });
  
    // validation
    if (!StudentsLOGIN.email) {
      res.status(400).json({ message: `invalid email` });
    }
  
    // password check
  
    const passcheck = await bcrypt.compare(password, StudentsLOGIN.password);
    if (!passcheck) {
      res.status(400).json({ message: `invalid password` });
    }
    // create token 
  
    const token =  jwt.sign({email}, process.env.JWT_SECTRET,  {
        expiresIn: "7d"
      })
  
      // jwt store cookie
  
      res.cookie('accesstoken', token, {
        HttpOnly: true,
        Secure: process.env.APP_ENV === 'development' ? false : true,
        sameSite: 'strict',
        path:'/',
        maxAge:  7 * 24 * 60 * 60 * 1000
  
      })
  
    res.status(200).json({ message: `you are login success fully`, token: token });
  });
  