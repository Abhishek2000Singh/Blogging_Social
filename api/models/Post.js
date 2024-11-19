const mongoose = require("mongoose")
const { Schema, model } = mongoose

const PostScehma =  new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    desc: {
        type: String,
        required: true,
    },
    photo: {
        type: String,
    },
    username: {
        type: String,
        required: true,
    },
    categories:{
        type: Array,
    },

},
    { timestamps: true }
)

module.exports =   mongoose.model("Post", PostScehma);
