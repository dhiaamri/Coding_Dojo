
const mongoose=require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup:{
        type:String,
        required:[true,"setup is required"],
        minLength:[10,"setup must be at least &0"]
        
    },
    punchline:{
        type:String,
        required:[true,"punchline is required"],
        minLength:[3,"punchline must be at least 3"]
    }
},{timestamps:true})

module.exports = mongoose.model('Joke', JokeSchema)

