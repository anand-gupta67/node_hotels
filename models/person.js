const mongoose = require('mongoose');
//define the person SCHEMA
const personShema = new mongoose.Schema({
     name: {
          type:String,
          required:true
     },
     age:{
          type: Number
     },
     work:{
          type:String,
          enum:['chef','waiter','manager'],
          required: true,
     }
})
//create person Model
const person =mongoose.model('person',personShema);
  module.exports = person;