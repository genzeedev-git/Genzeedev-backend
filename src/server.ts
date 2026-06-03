import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import dataRoutes from "./routes/dataRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const createApp = () => {
  const app = express();

  app.use(cors({ origin: process.env.FRONTEND_URL || "https://genzeedev.vercel.app" }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  app.use("/api", dataRoutes);
  app.use("/api", contactRoutes);

  return app;
};

let appPromise: Promise<express.Express> | null = null;

const getApp = async () => {
  if (!appPromise) {
    appPromise = connectDB().then(() => createApp());
  }
  return appPromise;
};

export default async (req: express.Request, res: express.Response) => {
  const app = await getApp();
  return app(req, res);
};
