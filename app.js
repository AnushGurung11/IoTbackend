import express from 'express'; 
import mongoose from 'mongoose';
import  dotenv from 'dotenv'; 

dotenv.config(); 

const app = express(); 

app.listen(process.env.PORT, ()=>{
    console.log("Listening to the port", process.env.PORT);
})

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("Connected to the DATABASE"))
.catch((error) => console.log("Error occured", error)); 