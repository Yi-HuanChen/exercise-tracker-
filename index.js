const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const {urlencoded} =require('express')
const mongoose= require("mongoose")

//connect to mongo DB
mongoose.connect(process.env.MONGO_URI)
console.log("connected to MongoDB successfully");

//import model
const userSchema = new mongoose.Schema({ username: 'string'});
const user=mongoose.model('user',userSchema);


const exerciseSchema = new mongoose.Schema({
username:{type:String,required:true},
description:{type:String,required:true},
duration:{type:Number,required:true},
date:{type:Date,default:Date.now()}
});

const exercise=mongoose.model('exercise',exerciseSchema);



app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});
app.get("/api/users",(req,res)=>{
user.find({},(err,data)=>{
res.json({data})

})

}
)



app.post("/api/users",(req,res)=>{
//get username form
updateusername=req.body.username
//check username already exist
user.findOne({username:updateusername},(err,data)=>{
if(err){
  res.send("Unknown userID")
  return res.json({err:'Unknown userID'})
}
if(!data){//if username has not been created,create a new object
const newuser=new user({username:updateusername})

newuser.save((err,data)=>{//if username has not been created , save user object
  if(error)return console.log(err)
  const reducedData={"username":data.username,
"_id":data._id}
  res.json(reducedData)
  console/log(reducedData)
})
}else{
  res.send(`Username ${updateusername} already exists.`)
  console.log(`Username ${updateusername} already exists.`)
}

})



})

app.post('/api/users/:_id/exercises', (req, res) => {




})




const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})