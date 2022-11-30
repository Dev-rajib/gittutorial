const mongoose = require('mongoose');
const express = require('express');
const cors = require("cors");
require('./db/config');
const User = require('./db/User');
const Product = require('./db/Product');
const app=express();
const port = 5001;
app.use(express.json());
app.use(cors());

app.post("/register",async(req,resp)=>{
  let user = new User(req.body);
  let result = await user.save(); 
  // result = result.toObject();
  // delete result.password;
  resp.send(result);
});


app.post('/login', async (req,resp)=>{
  console.log(req.body);
  let userData = await User.findOne(req.body);
  //console.log(userData);
  //resp.send(userData);
   if(userData){
     resp.send(userData);
   }else{
     console.log("no Data found");
   }
});

app.post("/add-product",async(req,resp)=>{
  let product =  new Product(req.body);
  let result = await product.save();
  resp.send(result); 
});

app.get("/list-product",async(req,resp)=>{
  let products =  await Product.find();
  if(products.length>0){
    resp.send(products);
  }else{
    resp.send({Result :"No record Found"});
  }
})



app.listen(port, () => {
    console.log(`app listening on port ${port}`)
});



