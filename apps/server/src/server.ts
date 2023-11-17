import express,{ Express,Request,Response } from "express";
import executeCode from "executor/src/execute"

const server:Express = express();
const PORT:Number = 3001;

server.use(express.json());

server.get('/',(req,res)=>{
    res.send("hello");
})


interface ExecutionResult {
    result: any; // Replace 'any' with the actual type of result
    timetaken: number; // Replace 'number' with the actual type of timetaken
    spacetaken: number; // Replace 'number' with the actual type of spacetaken
}

server.post('/submission', async (req: Request, res: Response) => {
    const { userCode, problemNumber, language, userid } = req.body;

    try {
        const { result, timetaken, spacetaken }: ExecutionResult = await executeCode(userCode, problemNumber, language);

        res.send({
            result,
            timetaken,
            spacetaken
        });
    } catch (error) {
        res.status(500).send('Error executing the code.');
    }
});



server.listen(PORT);