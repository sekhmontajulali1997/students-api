import asyncHandler from "express-async-handler";
import Students from "../Model/StudentsModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * description : post requiest
 * routes : Students
 * mothode: post
 * access: public
 */

export const createStudents = asyncHandler(async (req, res) => {
  const { name, email, Team, Book, password } = req.body;
  // password hash

  const passHash = await bcrypt.hash(password, 10);

  const StudentsList = await Students.create({
    name,
    email,
    Team, 
    Book,
    password: passHash,
  });
  // create token 

  const token =  jwt.sign({name,
    email}, process.env.JWT_SECTRET,  {
      expiresIn: "7d"
    })
  if (!email) {
    res.status(400).json({ message: ` Students not ctreated` });
  }
  res.status(200).json({ message: ` Students ctreated`, StudentsList, token});
});
/**
 * description : get requiest
 * routes : Students
 * mothode: get
 * access: public
 */

export const allStudents = asyncHandler(async (req, res) => {
  const showStudents = await Students.find().populate('Book').populate('Team');
  res.status(200).json({ message: ` show all Students`, showStudents });
});

/**
 * description : post requiest
 * routes : edit Students
 * mothode: post
 * access: public
 */



export const editStudents = async (req, res) =>{

  const {id} = req.params;
  
  const updateStudents = await  Students.findById({_id: id })
  res.status(400,{
    update: updateStudents
  })
}



export const eeditStudents = async (req, res) =>{

  const {id} = req.params
  const {name,email,Team,Book} = req.body;

  
  const updateStudents = await  Students.findByIdAndUpdate({_id: id }, {
    name,email,Team,Book
  },{new: true});
  res.status(200),{
    updatedStudents: updateStudents
  }
}

/**
 * description : delete requiest
 * routes : delete Students
 * mothode: post
 * access: public
 */
export const DeleteStudents = async (req, res) => {
  const {id}= req.params;
  const Studentss = await Students.findByIdAndDelete({_id:id})

  res.status(200, {message: `students delete`});
};