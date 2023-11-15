import express,{ Express,Request,Response } from "express";

const server:Express = express();
const PORT:Number = 3000;

server.post('/submission',(req:Request,res:Response)=>{
    const userCode = req.body;

    
})


