import express,{Express,Request,Response,Application, json} from 'express';
import dotenv from 'dotenv';


// ROUTES

import verificationRouter from './routes/verification.routes';


// DATABASE
import connectDB from './database/database';
import adminRouter from './routes/admin.routes';

dotenv.config();

const server:Application = express();
const PORT = process.env.PORT || 8001;

server.use(express.json());

// ROUTES

server.use('/verify',verificationRouter)
server.use("/admin", adminRouter);


let mongoDBUri: (string | undefined) = process.env.DB_URI;

connectDB(mongoDBUri);

server.listen(PORT,()=>{
    console.log(`${PORT} CONNECTED`);
});