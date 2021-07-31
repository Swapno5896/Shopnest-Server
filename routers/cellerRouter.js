const Router = require('express').Router();
const CellertMoel = require('../model/sellerModel')

Router.route('/:id')
.get(getOneProduct)
.delete(deleteProduct)
module.exports = Router;