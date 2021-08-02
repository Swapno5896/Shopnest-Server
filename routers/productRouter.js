const Router = require('express').Router();
const ProductMoel = require('../model/productModel')

const getAllProducts = (req,res)=>{
    ProductMoel.find()
    .then(data=>res.send(data))
    .catch(err=>console.log(err))
} 

const addNewProduct = (req,res)=>{
     const pd = new ProductMoel(req.body)
    // console.log(pd)
    pd.save(pd)
    .then(data=>res.send(data))
    .catch(err=>{
        console.log(err)
        res.send(err._message) 
    })
}

const getOneProduct = (req,res)=>{
    ProductMoel.findById(req.params.id)
    .then(data=>res.send(data))
    .catch(err=>console.log(err))
}

const deleteProduct = (req,res) =>{
    ProductMoel.findByIdAndDelete(req.params.id)
    .then(data=>res.send(data))
    .catch(err=>console.log(err))
}
~
// const updateProduct =(req,res)=>{
//     ProductMoel.put({_id:req.params.id},{$set:{req.body}})
//     .then(data=>res.send(data))
//     .catch(err=>console.log(err))
// }
Router.route('/')
.get(getAllProducts)
.post(addNewProduct)
Router.route('/:id')
.get(getOneProduct)
.delete(deleteProduct)

module.exports = Router;