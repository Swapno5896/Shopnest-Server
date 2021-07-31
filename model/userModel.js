const {Schema,model} = require('mongoose');
const usersSchema = new Schema({
    name:{type:String,require:[true,'Please insert your name']},
    email:{type:String,require:[true,'Please insert your email']},
    phone:{type:String,require:[true,'Please insert your phone']},
    address:{type:String,require:[true,'Please insert your address']},
    location:{latitude:String,longitude:String},
    pamentMethod:String,
});

module.exports = model('users',usersSchema);