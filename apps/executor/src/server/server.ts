import express, { Express, Request, Response } from "express";
import * as execute from "./execute";

const server: Express = express();
const PORT = process.env.PORT as string || 3002;

server.use(express.json());

server.post("/submission", async (req: Request, res: Response) => {
  const { userCode, problemNumber, language, userid } = req.body;
  let output_json;
  const container_id = await execute.default.main_exec(problemNumber, language);
  if (container_id) {
    output_json = await execute.default.waitForFile(container_id);
  }
  res.send(JSON.stringify(output_json)).status(200);
});


server.listen(PORT,()=>{
    console.log("PORT is "+PORT); 
});