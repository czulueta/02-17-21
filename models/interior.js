const mongoose = require("mongoose")
const Schema = mongoose.Schema

const interiorSchema = new Schema({
    walls: {
        type: String,
    },
    hallways: {
        type: String,
    },
    bathrooms: {
        type: String,
    },
    bedrooms: {
        type: String,
    },
    kitchens: {
        type: String,
    },
    diningrooms: {
        type: String,
    }
})
module.exports = mongoose.model("Interior", interiorSchema)