const mongoose = require('mongoose');
const dotenv = require('dotenv');

const uri = process.env.DATABASE;

mongoose.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true 
}).then(()=>{
    console.log('Database connection successfully');
}).catch(err=>{
    console.log(`Database is not connected: ${err}`);
})