import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());

// application routes

const getAController = (req: Request, res: Response) => {
  res.send("backend server is running");
};
app.get("/", getAController);
app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

export default app;
