import mongoose from "mongoose";
import TeamModel from "./TeamModel.js";
import BookModel from "./BookModel.js";

const StudentsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      unique: true,
    },

    Team: {
      type: mongoose.Schema.Types.ObjectId,
      ref:TeamModel,
    },
    Book: {
      type: mongoose.Schema.Types.ObjectId,
      ref:BookModel,
    },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("Student", StudentsSchema);
