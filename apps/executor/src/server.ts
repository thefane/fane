import express,{ Express,Request,Response } from "express";
import executeCode from "./execute";

const server:Express = express();
const PORT:Number = 3000;

server.use(express.json());

server.post('/submission', async (req: Request, res: Response) => {
    const { userCode, problemNumber, language, userid } = req.body;

    const [result:String, timetaken:Number, spacetaken:Number] = await executeCode(userCode, problemNumber, language);

    res.send({
        result,
        timetaken,
        spacetaken
    });
});


