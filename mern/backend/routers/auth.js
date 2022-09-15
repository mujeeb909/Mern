const jwt = require('jsonwebtoken');
const express = require("express");
const router = express.Router();
const authenticate = require('../middleware/authenticate')




const db = require("../conn");
const User = require("../models/user.model");

const bcrypt = require('bcryptjs');

router.get("/", (req, res) => {
  res.send("This is Backend Router");
});

// Using Promises (Reegister Route)

// router.post('/register', (req,res)=>{
//     console.log(req.body);
//     res.send(req.body);

//     const {name, email, phone, work, password, cpassword} = req.body;

//     if(!name || !email || !phone || !work || !password || !cpassword){
//         return res.status(422).json("plz fill all the fields");
//     }

//     User.findOne({email : email})
//     .then((userexist)=>{
//         if(userexist){
//             return res.status(422).json("User already exist");
//         }

//         const user = new User({name, email, phone, work, password, cpassword});

//         user.save()
//         .then(()=> res.json("user added"))
//         .catch(err => res.status(400).json( 'Error: ' + err));

//     }).catch(err => res.status(400).json( 'Error: ' + err));
// });

// Using Async Awaits (Register Route)

router.post("/register", async (req, res) => {
  const { name, email, phone, work, password, cpassword } = req.body;

  if (!name || !email || !phone || !work || !password || !cpassword) {
    return res.status(422).json("plz fill all the fields");
  }

  try {
    const userexist = await User.findOne({ email: email });

    if (userexist) {
      return res.status(422).json("User already exist");
    } else if (password != cpassword) {
      return res.status(422).json("Your password does not match");
    } else {
      const user = new User({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      });

      await user.save();

    res.status(201).json("Message:" +" User added Successfully");
      
    }
  } catch (err) {
    console.log(err);
  }
});

//Login Route (aysnc-await)
router.post("/signin", async (req, res) => {
  // console.log(req.body);
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.json("Plz fill input fields");
    }

    const userLogin = await User.findOne({ email: email });

    

    if (userLogin) {
        
        const isMatch = await bcrypt.compare(password, userLogin.password);

        const token =  await userLogin.generateAuthToken();
        res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true
        });
        
        if (isMatch){
            res.json("User login successfully");
        }else{
            res.json("Invalid credentials");
        }
    } else {
      res.json("Invalid credentials");
    }
  } catch (err) {
    console.log({ message: err });
  }
});



router.get("/about", authenticate,  (req, res) => {
  console.log('this is about');
  res.send(req.rootUser);
});

router.get("/contact", (req, res) => {
    // res.cookie("test", "Checking");
  res.send("Router-contact");
});

router.get("/signin", (req, res) => {
  res.send("Router-signin");
});

module.exports = router;
