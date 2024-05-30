const mongoose=require('mongoose');
const colors=require('colors');

const connectDB=async()=>{
    try {
       await mongoose.connect(process.env.DB_URL);
        console.log(`MONGODB CONNECTED ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`MONGODB SERVER ISSUE ${error}`)
    }
};

module.exports=connectDB;