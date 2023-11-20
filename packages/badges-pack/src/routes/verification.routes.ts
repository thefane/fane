import express,{Express,Request,Response, Router} from "express";

const verificationRouter:Router = express.Router();

verificationRouter.post('/',(req:Request,res:Response)=>{
    const data = req.body;
    console.log(data);
    
    const uniquePin = data.uniquePin;
    console.log(uniquePin);
    
    try {
        res.send("Badge exist");
    } catch (error) {
        res.send(JSON.stringify({"message":"This is fake"}));
    }
});

export default verificationRouter;

