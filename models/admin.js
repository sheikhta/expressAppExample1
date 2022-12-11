const mongoose = require('mongoose');
const adminSchema = new mongoose.Schema({
    adminFirstName:{type:String,
    required:true},
    adminLastName:{type:String,
    required:true},
    adminType:{kind:{type:String,enum:['admin','client']},
item:{type:mongoose.Types.ObjectId,refPath:'adminType.kind'}}
},{collection:'admin'});
module.exports = mongoose.model('admin',adminSchema);