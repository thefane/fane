import mongoose, { mongo } from 'mongoose';

async function  connectDB(mongoDBUri:(string|undefined)) {
    try {
    
        if (mongoDBUri != undefined) {
            await mongoose.connect(mongoDBUri);
            console.log("Mongoose connected");
            
        }else{
            console.log("Undefined URI");
            
        }
    
    } catch (error) {
        console.log(error);
    
    }
}


export default connectDB;