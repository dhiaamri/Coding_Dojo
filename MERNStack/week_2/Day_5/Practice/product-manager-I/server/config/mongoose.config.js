const mongoose  = require('mongoose');
require('dotenv').config()

const uri = `mongodb+srv://root:root@firstdb.ovorull.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(uri)
.then(() => console.log( `CONNECTION WITH DATABASE ESTABLISHED WITH SUCCESS`))
.catch(error => console.log("CONNECTION WITH DATABASE FAILED", error))