const Router = require('express').Router();
const CustomerModel = require('../model/customerModel')

const addNewCustomer = (req,res)=>{
    const costomer = new CustomerModel(req.body)
   // console.log(pd)
   pd.save(costomer)
   .then(data=>res.send(data))
   .catch(err=>{
       console.log(err)
       res.send(err._message) 
   })
}

const getSpeceficCustomer = (req,res)=>{
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
.post(addNewCustomer)
Router.route('/:id')
.get(getSpeceficCustomer)
.delete(deleteCustomer)
module.exports = Router;