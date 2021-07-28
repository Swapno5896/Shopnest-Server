const {Schema,model} = require('mongoose');

const ProductSchema = new Schema({
    name:String,
    Price:{type:Number,min:10,max:100}
});


module.exports = model('products',ProductSchema); // model ar name(products) e collection create hobe