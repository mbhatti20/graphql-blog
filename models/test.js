const mongoose=require('mongoose');

const Schema= mongoose.Schema;

const testSchema=new Schema({
    testfield:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Test',testSchema);