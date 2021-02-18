const mongoose = require("mongoose")
const Schema = mongoose.Schema

const exteriorSchema = new Schema({
    walls: {
        type: String,
    },
    trim: {
        type: String,
    },
    windowsils: {
        type: String,
    },
    doors: {
        type: String,
    }
})
module.exports = mongoose.model("Exterior", exteriorSchema)