const mongoose = require('mongoose');
require ('dotenv').config();
// define mongoDB connection URL(local)
//const mongoURL = process.env.MONGODB_URL_LOCAL;
   //online dbURL  
const mongoURL = process.env.MONGODB_URL;// url .env m hai 
//setup mongoDB connection 
mongoose.connect(mongoURL);

//get the default connection
//mongoose maintain a default connections object representing the mongoDB con..
const db = mongoose.connection;

//define event listeners 
db.on('connected', ()=>{
     console.log('connected to MongoDB server')
});
db.on('error', (err)=>{
     console.error('MongoDB connection error')
});
db.on('disconnected', ()=>{
     console.log('MongoDB disconnected')
});
