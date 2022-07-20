import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        Aadhar: {
            type: Number,
            required: true
        }
    },
    {timestaps: true}
);

export default mongoose.model('userDetails', userSchema);