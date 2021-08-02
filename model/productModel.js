const {Schema,model} = require('mongoose');

const ProductSchema = new Schema({
    name:{type:String,require:[true,'Please insert product name']},
    price:{type:Number,min:10},
    shopowner:{type:String,require:[true,'Please insert  Shopowner  ']},
    imgUrl:{type:String,require:[true,'Should have image']},
});


module.exports = model('products',ProductSchema); // model ar name(products) e collection create hobe