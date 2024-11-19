const mongoose = require("mongoose")
const { Schema, model } = mongoose

const CategoryScehma =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

},
    { timestamps: true }
)

module.exports =   mongoose.model("Category", CategoryScehma);
