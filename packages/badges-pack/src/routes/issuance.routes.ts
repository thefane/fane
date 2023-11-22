import express, { Express, Request, Response, Router } from "express";
import { IssuanceModel } from "../database/models/badge.model";
import { randomUUID } from "crypto";

// Middleware
import { authenticate } from "../middleware/authenticate.middleware";

const issuanceRouter: Router = express.Router();

issuanceRouter.post("/",authenticate, async (req: Request, res: Response) => {
  const { badgeID } = req.body;
  const userid = req.user.userId;
  const issuanceUID = `${Date.now()}-${userid}-${randomUUID()}`;
  const organisation = req.user.organisation;
  console.log(userid);
  
  try {
    const newIssue = new IssuanceModel({
      badge: badgeID,
      reciever: userid,
      issuanceUID: issuanceUID,
      issuedBy: organisation,
      issuedOn:  Date.now()
    });

    await newIssue.save();

    return res.status(200).json({message:'Badge issued',"issuance":newIssue});
  } catch (error) {
    console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });

  }
});


issuanceRouter.get("/show", authenticate, async (req, res) => {
  try {
    const userid = req.user.userId;

    // Fetch all issuances for the specific user ID
    const allIssuances = await IssuanceModel.find({ reciever: userid });

    res.status(200).json({ issuances: allIssuances });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching issuances" });
  }
});


export default issuanceRouter;