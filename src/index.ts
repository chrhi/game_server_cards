import express from "express";


const app = express();


app.get('/',(req, res) =>{
    console.log("the express is working")
    res.json({success:"hello my express app"})
})


app.listen(4000, () =>{
    console.log(` http://localhost:4000`)
})