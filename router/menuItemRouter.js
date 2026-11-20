const express = require('express');
const router = express.Router();
const menuItem = require('../models/menuItem')

//Post route to add a MENU
router.post('/', async (req, res) => {
    try {
        const data = req.body; //assuming the request body contain the person data 

        //create a new person document using mongoose model
        const newPerson = new menuItem(data);
        //save the new person to the database
        const response = await newPerson.save(); // .save()` Mongoose ka method hai jo 
                                                //new document ko MongoDB database me 
                                                //save (store) karta hai** aur Promise return karta hai.
        console.log('data saved');
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//GET method to get MENU
router.get('/', async (req,res)=> {
     try{
         const data =  await menuItem.find();//data nikalne k liye dbs s
         console.log('data fetched');
         res.status(200).json(data);
     }
     catch(err){
          console.log(err);
          res.status(500).json({error:'internal server Error'});

     }
})
// comment for tesing
module.exports=router;