import express,{Express,Request,Response,Application, json} from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// ROUTES

import verificationRouter from './routes/verification.routes';


// DATABASE
import connectDB from './database/database';
import adminRouter from './routes/admin.routes';
import userRouter from './routes/user.routes';
import issuanceRouter from './routes/issuance.routes';

dotenv.config();

const server:Application = express();
const PORT = process.env.PORT || 8001;

server.use(express.json());
server.use(cors())
// ROUTES

server.use('/verify',verificationRouter)
server.use("/admin", adminRouter);
server.use("/user",userRouter);
server.use("/issue", issuanceRouter);

let mongoDBUri: (string | undefined) = process.env.DB_URI;

connectDB(mongoDBUri);

server.listen(PORT,()=>{
    console.log(`${PORT} CONNECTED`);
});