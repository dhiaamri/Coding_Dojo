const express = require('express')
require('dotenv').config()
const app=express()



app.use(express.json());
app.use(express.urlencoded({extended:true}))

require('./routes/joke.routes')(app)

require("./config/mongoose.config")()




app.listen(8000,()=>{console.log("SERVER IS RUNNING ON PORT 8000");})