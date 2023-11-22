import express,{Express,Request,Response, Router} from "express";
import { BadgeModel } from "../database/models/badge.model";
import { authenticate } from "../middleware/authenticate.middleware";
import { v4 as uuidv4 } from "uuid";

const adminRouter:Router = express.Router();

adminRouter.get("/", authenticate, (req, res) => {
  res.json({ message: "works" });
});


adminRouter.post('/add',authenticate,async (req:Request,res:Response)=>{
    const { badgeName, badgeDescription } = req.body;
    const organisation = req.user.organisation;
    try {
          const badge = new BadgeModel({
            badgeUID: uuidv4(), 
            badgeName: badgeName,
            badgeDescription: badgeDescription,
            badgeIssuer: organisation, 
            badgeCreatedOn: new Date(), 
          });   
          
          await badge.save();

          res.status(200).json({"message":"Badge successfully created","badge":badge});
    } catch (error) {
        console.log(error);
    }
});

adminRouter.get("/show", authenticate, async (req, res) => {
  try {
    // Fetch all badges from the database
    const badges = await BadgeModel.find({
      badgeIssuer: req.user.organisation,
    });

    // Return the fetched badges as a JSON response
    res.status(200).json({ badges });
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).json({ message: "Error fetching badges" });
  }
});

export default adminRouter;

