import mongoose from "mongoose";


const TeamSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    
},{
    timestamps: true,
})
export default mongoose.model('Team', TeamSchema);