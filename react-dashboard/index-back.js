const mongoose = require('mongoose');
const connectDB = async ()=>{
  mongoose.connect('mongodb://localhost:27017/e-commerce'); 
  const productSchema = mongoose.Schema({});
  const product = mongoose.model('users',productSchema);
  const data =await product.find();
  console.warn(data);
}
connectDB();

const express = require('express');
const app=express();
const port = 5001;
app.get('/',(req,resp)=>{
resp.send("Ready ");
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

