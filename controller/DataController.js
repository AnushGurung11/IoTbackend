    // Importing the model for controlling the data flow 
import Data from '../model/Data.js'; 

// Created a function for posting the new entry
// async function is used which will not stop the flow of the program
export const addData = async (req, res) => {

    try{
        const {waterLevel, servoStatus} = req.body;
        const newData = new Data({waterLevel, servoStatus}); 
        await newData.save(); 
        res.status(201).json({message: 'Data saved successfully'}); 

    }catch(error){
        res.status(500).json({error: 'Failed to save data'});
    }
}

export const addtest = async (req, res) => {
    try{
        const {waterLevel, servoStatus} = req.body;
        const newData = new Data({waterLevel, servoStatus}); 
        console.log(newData);
        res.status(201).json({message: 'Data saved shown successfully'}); 
    }catch(error){
        res.status(500).json({error: 'Failed to show data'});
    }
}

// function for getting all the data from the data base
export const getData = async(req, res)=>{
    try{
        const allData = await Data.find().sort({createdAt: -1 }); 
        res.status(200).json(allData); 
    }catch(error){
        res.status(500).json({ error: 'Failed to fetch data' });
    }
}

// This Function is not necessary, we can get te current data form getData function itself. 
export const getCurrentData = async(req, res) =>{
    try{
        const currentData = await Data.findOne().sort({createdAt: -1});
        res.status(200).json(currentData); 
    }catch(error){
        res.status(500).json({error:'failed to fetch data'})
    }
}



