const express = require('express')
const mongoose = require('mongoose')
// const userRouter = require('./routers/userRouter')
// const urlRouter = require ('./routers/urlRouter')
const userRoute = require("./Routes/userRoute");
const app = express();
app.use(express.json())

const cors = require('cors');
app.use(cors());
const dotenv = require("dotenv");
dotenv.config();







const URL = process.env.URL;

app.use('/user/', userRoute)

mongoose.connect(URL,
 {useNewUrlParser:true,useUnifiedTopology: true},(err) => {
 if (err) {
    throw err  
  }else{
    console.log("MongoDB Connected");
  }
})


const PORT = process.env.PORT || 9003

app.listen(PORT,() => console.log(`Server Running in the port ${PORT}`));