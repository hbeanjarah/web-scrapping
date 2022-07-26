import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Scrap } from "./services/scraping";

dotenv.config();

const app: Express = express();
app.use(cors());

const port = process.env.PORT;

app.get("/", async (req: Request, res: Response) => {
  const scrap = new Scrap("https://www.portaljob-madagascar.com/emploi/liste");
  const data = await scrap.scrappAll();
  console.log("scrap", data);
  res.send(JSON.stringify(data));
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running http://localhost:${port}`);
});
