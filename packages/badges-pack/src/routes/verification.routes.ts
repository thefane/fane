import express,{Express,Request,Response, Router} from "express";
import { IssuanceModel } from "../database/models/badge.model";
const verificationRouter:Router = express.Router();

verificationRouter.post("/", async (req: Request, res: Response) => {
  const data = req.body;
  const uniquePin = data.uniquePin;
  const filter = { issuanceUID: uniquePin };
  try {
    const responseData = await IssuanceModel.find(filter);
    console.log(responseData);
  } catch (error) {
    res.send(JSON.stringify({ message: "This is fake" }));
  }
});

export default verificationRouter;

