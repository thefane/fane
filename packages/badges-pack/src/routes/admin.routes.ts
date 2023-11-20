import express,{Express,Request,Response, Router} from "express";

const adminRouter:Router = express.Router();

adminRouter.post('/',(req:Request,res:Response)=>{
    const data = req.body;    
    const uniquePin = data.uniquePin;
    
    try {
        res.send("Badge exist");
    } catch (error) {
        res.send(JSON.stringify({"message":"This is fake"}));
    }
});


adminRouter.post('/add',(req:Request,res:Response)=>{
    const req_data = req.body;
    const badge_data = req_data.metadata;

    try {
        
    } catch (error) {
        console.log(error);
    }
});

export default adminRouter;

