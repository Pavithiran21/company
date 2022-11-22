const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    mobilenumber:{
        type:Number,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    department:{
        type:String,
        require:true,
    }
    
})
module.exports = mongoose.model('projects',userSchema);