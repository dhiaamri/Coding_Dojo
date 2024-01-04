const mongoose = require('mongoose')

require('dotenv').config()
module.exports = async() =>{
    try{
       await mongoose.connect(process.env.uri);
       console.log("CONNECTION WITH DB ESTABLISHED WITH SUCCESS");

    } catch(error){
        console.log("CONNECTION TO DB FAILED!!!!!!! \n ",error);
    }
}