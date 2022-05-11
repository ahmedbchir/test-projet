const express = require('express');
const app = express();
const connectDB = require("./connectDB")
const cors = require("cors")
app.use(cors())
app.use(express.json())
app.use('/user',require("./Routers/userRouters"))
app.use('/coach',require("./Routers/coachRouters"))
app.use('/product',require("./Routers/productRouters"))

connectDB();

const port =5000;

app.listen(port,(err)=>{
   err ? console.log(err) : console.log(`Server is running on port : ${port}`);
})