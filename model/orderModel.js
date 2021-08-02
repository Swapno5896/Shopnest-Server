const {Schema,model} = require('mongoose');

const orderSchema = new Schema({
    userId : Schema.Types.ObjectId,
    customerId:Schema.Types.ObjectId,
    quantity:Number,
   
    status:String,
  
})

module.exports = model('orders',orderSchema)