const express = require('express');
const router = express.Router();
const person = require('../models/person');

// POST route to add a PERSON
router.post('/', async (req, res) => {   //bar bar '/person' ki jarurt nhi h server m commomly likh diya 
    try {
        const data = req.body;
        const newPerson = new person(data);
        const response = await newPerson.save();
        console.log('data saved'); 
        res.status(200).json(response);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
});
//GET method to get person 
router.get('/', async (req,res)=> {
     try{
         const data =  await person.find();//data nikalne k liye dbs s
         console.log('data fetched');
         res.status(200).json(data);
     }
     catch(err){
          console.log(err);
          res.status(500).json({error:'internal server Error'});

     }
})

//parametrised API calla
router.get('/:workType',async (req,res)=>{
     try{
          const workType = req.params.workType;
           
          if(workType=='chef' || workType=='manager' || workType=='waiter'){
               const response = await person.find({work:workType});
               console.log('response fetched');
               res.status(200).json(response);
          }
          else{
              res.status(404).json({error:'invalid workType'}) 
          }
     }
     catch(err){
          console.log(err);
          res.status(500).json({error:'internal server error'})
     }
})

//UPDATE
router.put('/:id', async (req,res)=> {
     try{
          const personId = req.params.id;//extract the id from the URL parameter
          const updatedPerson = req.body; //update data for the person 

          const response = await person.findByIdAndUpdate(personId, updatedPerson, {
               new: true,//return the updated document
               runValidators: true,//run mongoose validation
          })

          if(!response){
               return res.status(404).json({error:'person not found'});
          }
          console.log('data updated');
          res.status(200).json(response);
     }
     catch(err){
          console.log(err);
          res.status(500).json({error:'internal server Error'})
     }
})

//DELETE
router.delete('/:id', async (req,res)=> {
    try{
     const personId = req.params.id; 
     //assuming you have a person model 
     const response = await person.findByIdAndDelete(personId);
     if(!response){
          return res.status(404).json({error:'person not found'});
     }
     console.log('data saved');
     res.status(200).json({message:'person deleted successfully'});
   } 
   catch(err){
     console.log(err);
     res.status(500).json({error:'Internal server Error'})
   }
})
module.exports = router;