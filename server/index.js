// import express from 'express';
const express = require('express');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const port = 5001;

// const
app.get("/", (req,res)=> {
    res.send('AAHJHD');
})
app.post("/a", function(req, res){
    try {
        console.log(req.body);
    } catch (error) {
        res.send("aaaaaaaaaaaaaaaaaaaaaaa");
    }
})

app.post("/api/post/news", async function(req, res){
    console.log(req);
})

app.listen(port, function(){
    console.log(`Server li)stening on http://localhost:${port}`);
});