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
    },
    viewAll:(req,res)=>{
        // Item.find().sort({ createdAt: -1 }).exec((err, items)
        Product.find().sort({ createdAt: -1 }).then(allProducts=>  res.status(200).json({allProducts,message:'All Notes :' ,ok:true})
        ).catch(error=>res.status(500).json(error))
    },
    findOneProduct:(req,res)=>{
        Product.findById(req.params.id)
        .then(oneProduct=>{
            if(!oneProduct){
                res.status(404).json({error:"Note Not Found"})
            }else{
                res.status(200).json(oneProduct)
            }
        })
        .catch(error=> res.status(500).json(error))
    },
    updateProduct:(req,res)=>{
        Product.findOneAndUpdate({ _id: req.params.id }, req.body,  {new:true, runValidators:true})
        .then(updatedProduct => {
            console.log("Product To Update", updatedProduct);
            res.status(200).json({ data: updatedProduct, message: 'Product Updated with success', ok: true })

        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })},
    deleteProduct:(req,res) => {
        Product.findByIdAndDelete({_id: req.params.id})
        .then(deletedProduct => {
            console.log("Deleted Product", deletedProduct);
            res.status(200).json({ data: deletedProduct, message: 'Product deleted with success', ok: true })
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error })
        })
    }

}
