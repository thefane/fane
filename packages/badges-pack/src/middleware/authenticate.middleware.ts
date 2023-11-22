import { Request,Response, NextFunction } from "express";
import jwt,{Secret} from 'jsonwebtoken'

export function authenticate(req: Request,res:Response,next:NextFunction){
    const token = req.headers.authorization?.split(" ")[1];
  console.log(token);
  
    if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  const secretKey:Secret = process.env.JWT_SECRET_KEY!;
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    if(decoded){
        console.log(decoded);
        req.user = decoded  ;
    }

    next();

});

}