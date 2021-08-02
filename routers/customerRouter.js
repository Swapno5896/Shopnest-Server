const Router = require('express').Router();
const CustomerModel = require('../model/customerModel')

const getAllCustomer = (req,res)=>{
    CustomerModel.find()
    .then(data=>res.send(data))
    .catch(err=>console.log(err))
} 

const addNewCustomer = (req,res)=>{
    const costomer = new CustomerModel(req.body)
   // console.log(pd)
   costomer.save(costomer)
   .then(data=>res.send(data))
   .catch(err=>{
       console.log(err)
       res.send(err._message) 
   })
}

const getSpecificCustomer = (req,res)=>{
    CustomerModel.findById(req.params.id)
    .then(data=>res.send(data))
    .catch(err=>console.log(err))
}

const deleteCustomer = (req,res) =>{
    CustomerModel.findByIdAndDelete(req.params.id)
    .then(data=>res.send(data))
    .catch(err=>console.log(err))
}

Router.route('/')
.get(getAllCustomer)
.post(addNewCustomer)
Router.route('/:id')
.get(getSpecificCustomer)
.delete(deleteCustomer)
module.exports = Router;