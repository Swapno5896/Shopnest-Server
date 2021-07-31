const Router = require('express').Router();
const CustomerModel = require('../model/customerModel')

Router.route('/:id')
.get(getOneProduct)
.delete(deleteProduct)
module.exports = Router;