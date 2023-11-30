import express,{Express,Request,Response, Router} from "express";
import { IssuanceModel } from "../database/models/badge.model";
const verificationRouter:Router = express.Router();

verificationRouter.post("/", async (req: Request, res: Response) => {
  const {uniquePin} = req.body;
  
  try {
    const issuanceData = await IssuanceModel.findOne({
      "issuanceUID": uniquePin,
    }); 
   if (issuanceData) {
     res.status(200).json({ message: "Badge issued", issuance: issuanceData });
   } else {
     res.status(404).json({ message: "Issuance not found" });
   }
  } catch (error) {
    res.send(JSON.stringify({ message: "This is fake" }));
  }
});

export default verificationRouter;