
import asyncHandler from 'express-async-handler';
import Book from '../Model/BookModel.js'

/**
 * description : get requiest 
 * routes : Book
 * mothode: get
 * access: public
 */
export const allBook = asyncHandler(
    async (req, res) =>{
      await  res.status(200).json({name: 'Book'})

    }
)
/**
 * description : post requiest 
 * routes : Book
 * mothode: post
 * access: public
 */

export const createBook = asyncHandler(
  async (req, res) =>{
    const {name, colors} = req.body;

    const BookList = await Book.create({
        name, colors
    });

    res.status(200).json({message: `Booklist created`,BookList})

  }
)