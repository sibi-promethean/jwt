const express = require('express');
const jwt = require('jsonwebtoken')

const app = express();
const port=3001

app.get("/api/token",(req,res)=>{
    const username={
        name:"sibi"
    }
    const password="sibi12345"
    const token=jwt.sign(username.password,{
        expiresIn:"1h"
    })
    res.status(401).json({token})
})
app.get("/api/verify",(req,res)=>{
    const token=req.headers['authorization']?.split(' ')[1]||'';
    const password="sibi12345"
    try{
        const decoded=jwt.verify(token,password)
        res.status(401).json({
            data: decoded
        })
    }
    catch(error){
        res.status(401).json({
            token
        })
    }
})
app.listen(port,()=>{
    console.log("listening.....")
})
