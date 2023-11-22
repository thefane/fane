import express, { Express, Request, Response, Router } from "express";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
import { UserModel } from "../database/models/badge.model";
const userRouter: Router = express.Router();


userRouter.post('/register',async (req:Request,res:Response)=>{
    
    const {email,organisation,password} = req.body;
    const hashedpassword = await bcrypt.hash(password,10);
    try {
        const user = new UserModel({
          email: email,
          password : hashedpassword,
          organisation: organisation
        });      
        
        await user.save();

        res.status(200).json({"message":"user created"});

    } catch (error) {
        console.log(error);
    }
});

userRouter.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { userId: user._id, email: user.email, organisation: user.organisation },
      process.env.JWT_SECRET_KEY!
    );

    res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});



export default userRouter;