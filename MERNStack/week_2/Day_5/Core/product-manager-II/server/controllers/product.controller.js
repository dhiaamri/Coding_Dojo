const Product=require("../models/product.model")
const mongoose=require('mongoose')

module.exports={
    createProduct:(req,res)=>{
        Product.create(req.body)
        .then(newCreatedProduct=>{
            console.log("new note created with success : ",newCreatedProduct);
            res.status(201).json({data:newCreatedProduct, message:'New Note Created with success!! ',ok:true})
        })
        .catch(err=>{
            console.log('ERROR WHILE CREATING NEW NOTE', err);
            res.status(500).json(err.errors)
        })
    }
}
