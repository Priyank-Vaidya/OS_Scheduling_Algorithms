const express = require('express');
// const routers = require('../Server/Routers');
const cors = require('cors');
const routers = require('./routes');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
//middleware
//use of cors dependencies will help to jump to the next specific function
app.use(cors());

app.use(express.json());
// app.use((req,res,next)=>{
//     console.log(req.path, req.method);
//     next();
// });
app.use('/api', routers);

//Listening to the Requests
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true , useUnifiedTopology: true })
try{
const db = mongoose.connection;

    app.listen(5000,()=>{
        console.log("connected to db and Listening to port 5000");
        // });

    })
}
catch (error) {console.log("Error in connecting")};