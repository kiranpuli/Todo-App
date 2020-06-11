const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    Date:{
        type:Date,
        default:Date.now
    }
})

const Item = mongoose.model("Item",itemSchema)

module.exports = Item