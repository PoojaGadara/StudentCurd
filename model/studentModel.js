import { Decimal128 } from "mongodb";
import mongoose from "mongoose";

//Defining a schema

const studentSchema= new mongoose.Schema({
    Name:{type:String ,required:true ,trim:true},
    Age:{type:Decimal128 ,required:true ,min:18 ,max:60},
    Fees:{type:Decimal128 ,required:true ,validate:(value) => value >= 5000.0}
});

const studentModel = mongoose.model("student",studentSchema);

export default studentModel;