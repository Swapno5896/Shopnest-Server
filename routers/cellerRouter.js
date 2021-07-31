const Router = require('express').Router();
const CellertMoel = require('../model/sellerModel')

const addNewSeller = (req,res)=>{
    const seller = new CellertMoel(req.body)
   // console.log(pd)
   pd.save(seller)
   .then(data=>res.send(data))
   .catch(err=>{
       console.log(err)
       res.send(err._message) 
   })
}

const getSpecificSeller = (req,res)=>{
    CellertMoel.findById(req.params.id)
    .then(data=>res.send(data))
    .catch(err=>console.log(err))
}
const deleteSeller = (req,res) =>{
    CellertMoel.findByIdAndDelete(req.params.id)
    .then(data=>res.send(data))
    .catch(err=>console.log(err))
}

Router.route('/')
.post(addNewSeller)
Router.route('/:id')
.get(getSpecificSeller)
.delete(deleteSeller)
module.exports = Router;