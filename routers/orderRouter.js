const Router = require('express').Router();
const OrderMoel = require('../model/orderModel')

const getAllOrder = (req,res)=>{
    OrderMoel.find()
    .then(data=>res.send(data))
    .catch(err=>console.log(err))
} 

const addNewOrder = (req,res)=>{
     const od = new OrderMoel(req.body)
    // console.log(pd)
    od.save(od)
    .then(data=>res.send(data))
    .catch(err=>{
        console.log(err)
        res.send(err._message) 
    })
}

const getOneOrder = (req,res)=>{
    OrderMoel.findById(req.params.id)
    .then(data=>res.send(data))
    .catch(err=>console.log(err))
}

const deleteOrder= (req,res) =>{
    OrderMoel.findByIdAndDelete(req.params.id)
    .then(data=>res.send(data))
    .catch(err=>console.log(err))
}


Router.route('/')
.get(getAllOrder)
.post(addNewOrder)
Router.route('/:id')
.get(getOneOrder)
.delete(deleteOrder)
module.exports = Router;