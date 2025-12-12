// For the connection to the database 
import mongoose  from "mongoose";


// Data Schema which will be mapped to the database 
const dataSchema  = new mongoose.Schema({
    waterLevel : {type: Number, required: true},
    servoStatus: {type: String, required: true}, 
    createdAt: { type: Date, default: Date.now}
}); 

//  Created a class and Exported storing the data in a single class Called Data. 
const Data = mongoose.model('Data',dataSchema);

export default Data; 