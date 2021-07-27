const {Schema,model} = require('mongoose');

const ProductSchema = new Schema({
    name:String,
    Price:Number
});


module.exports = model('products',ProductSchema); // model ar name collection create hobe