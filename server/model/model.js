//lets create mongodb scheme
//very simple mongodb model
const mongoose = require('mongoose')

var schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    status:String
})

//lets give our model name(or table name) and pass in our structure schema
const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;