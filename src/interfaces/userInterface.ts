
import mongoose from 'mongoose';


interface userDocument extends mongoose.Document {
    email: {type:String, required:true},
    name: {type: String, required: true},
    password:string, 
    id:{type:Number, required:true}, 
    phone:{type:Number, required:false},
    profession:{type:String, required:false},
    nationalite:{type:String, required:true}
}

export default userDocument;