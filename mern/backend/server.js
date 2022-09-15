const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env'});



const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json()); 

app.listen(port, ()=>{
    console.log(`Server is running: ${port}`);
});

// Database

require('../backend/conn');

// Middleware
const middleware = (req,res,next)=>{
    console.log("This is midlleware");
    next();
};

//Routes
app.use(require('../backend/routers/auth'));

