
import mongoose from "mongoose";


const PostSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true,
    },

    date:{
        type: String,
        required: true,
    },

    time: {
        type: String,
        required: true,
    },

    venue: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    }
})




const UserSchema = new mongoose.Schema({

    name: {
        type:String,
        required: true,
    },
    
    email: {
        type: String,
        required: true,
    },

    password:{
        type: String,
        required: true,
    },

    Posts :[PostSchema],
});



const FeedbackSchema = new mongoose.Schema({
    feedback:{
        type: String,
        required: true,
    }
});



const User = mongoose.model('User', UserSchema);
const Feedback = mongoose.model('Feedback', FeedbackSchema);
export {User, Feedback};