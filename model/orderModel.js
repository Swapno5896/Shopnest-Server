const {Schema,model} = require('mongoose');

const orderSchema = new Schema({
    userId : Schema.Types.ObjectId,
    customer:{
        delevaryAddress:{type:String,require:[true,`Order can't complete without delevary address`]},
        phone:{type:String,require:[true,`Please insert phone number for further communication`]},
        paymentType:{type:String, require:true}
    },
    price:Number,
    orderTime:{type:String, default:Date.now}
})

module.exports = model('orders',orderSchema)