import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL) => {
    try{
        const DB_option = {
            dbName: "Student",
        };
        await mongoose.connect( DATABASE_URL ,DB_option)
        console.log('Connected successfully');
    }
    catch(err){
        console.log('error')
    }
}

export default connectDB;