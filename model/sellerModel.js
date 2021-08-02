const {Schema,model} = require('mongoose');
const sellerSchema = new Schema({
    name:{type:String,require:[true,'Please insert your name']},
    adminEmail:{type:String,require:[true,'Please insert your email']},
    collaborator:[{id:String,isAccepted:Boolean}],
    phone:{type:String,require:[true,'Please insert your phone']},
    address:{type:String,require:[true,'Please insert your address']},
    location:{latitude:String,longitude:String}
});

module.exports = model('cellers',sellerSchema);