import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";
import "express-async-errors";

const app = express();

app.use(express.json());
app.use(routes);
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
  res.sendStatus(500);
});

app.listen(3000, () => {
  console.log("listening on port 8080");
  
});