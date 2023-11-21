import express,{Express,Request,Response, Router} from "express";
import { BadgeModel } from "../database/models/badge.model";

const adminRouter:Router = express.Router();




adminRouter.post('/add',(req:Request,res:Response)=>{
    const req_data = req.body;
    const badgeData = req_data.metadata;

    try {
          const badge = new BadgeModel({
            badgeUID: badgeData.badgeUID, // Add the necessary fields based on your schema
            badgeName: badgeData.badgeName,
            badgeDescription: badgeData.badgeDescription,
            badgeIssuer: badgeData.badgeIssuer, // Assuming badgeIssuer is provided
            badgeCreatedOn: new Date(), // Assuming the badge creation date is set to current date
          });       
    } catch (error) {
        console.log(error);
    }
});

export default adminRouter;

