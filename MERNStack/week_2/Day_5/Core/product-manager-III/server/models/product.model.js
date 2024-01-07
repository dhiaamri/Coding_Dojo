const mongoose=require('mongoose')

const ProductSchema= new mongoose.Schema({
    title:{

        type:String,
        required:[true, "Title is required !"],
        minlength:[3, '{PATH} length must be at least 3 🚫🚫🚫🚫']

    },
    price:{
        type:Number,

    },
    description:{
        type:String,
        required:[true, "Description is required !"],
        minlength:[10, '{PATH} length must be at least 10 🚫🚫🚫🚫']

    }
},{timestamps:true})

const Product =mongoose.model("Product",ProductSchema) 
module.exports = Product;

