
import mongoose from "mongoose";


const BookSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
 
},{
    timestamps: true,
})
export default mongoose.model('Book', BookSchema);



