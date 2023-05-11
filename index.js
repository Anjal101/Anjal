// 1.importing express
const express =require("express");

// 2.initialising
const app = new express()

app.use(express.urlencoded({extended:true}));
app.use(express.json());
// 3.Api creation
app.get('/',(req,res)=>{
    res.json("hello welcome to backend")
})
 app.get("/view",(req,res)=>{
    res.json("view port 3005")
 })
 app.post('/signup',(req,res)=>{
    
    res.send(req.body.name)
    res.send(req.body.age)
 })
// 4.setting port
app.listen(3005,()=>{
    console.log("port 3005 is running");
})