const mongoose=require('mongoose');

const User=mongoose.Schema({
    name:{type:String},
    password:{type:String}
},
{
    collection:"users"
})

const model=mongoose.model('users',User);

module.exports=model;