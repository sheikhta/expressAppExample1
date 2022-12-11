const mongoose = require('mongoose');
const clientSchema = new mongoose.Schema({
    clientFirstName:{type:String,
    required:true},
    clientLastName:{type:String,
    required:true},
    clientAge:{type:Number,
        required:true},
        clientDOB:{type:Date,
            required:true},
    
    clientType:{kind:{type:String,enum:['admin','client']},
item:{type:mongoose.Types.ObjectId,refPath:'client.kind'}}
},{collection:'client'});
module.exports = mongoose.model('client',clientSchema);