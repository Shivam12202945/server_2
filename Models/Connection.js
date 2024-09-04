import mongoose from "mongoose";


const Connect = (url)=>{

    try{
        const connection = mongoose.connect(url);
        console.log('Database Connected!');
        return connection;
    }

    catch(error){
        console.log('Error connecting the database');
    }
}


export {Connect};