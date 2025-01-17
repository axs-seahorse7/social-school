import mongoose from "mongoose"

const connection = async ()=>{
    try{
         await mongoose.connect(process.env.mongooseURI)
        console.log(`MongoDB Connected:`);
    } catch(err){
        console.error(`Error : ${err.message}`)
        process.exit(1)
    }

    mongoose.connection.on('connected', () => {
    console.log('MongoDB connected successfully');
});

mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err.message);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});
}

export default connection;