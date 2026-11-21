const mongoose = require('mongoose');
// define mongoDB connection URL 
//const mongoURL ='mongodb://localhost:27017/hotel' //local 
   //online databaseUrl  
const mongoURL = 'mongodb+srv://anandgupta9886_db_user:Qwerty2005@cluster0.kdlrbvc.mongodb.net/'

//setup mongoDB connection 
mongoose.connect(mongoURL)

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
