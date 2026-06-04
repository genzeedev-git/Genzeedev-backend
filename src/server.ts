import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import dataRoutes from "./routes/dataRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const createApp = () => {
  const app = express();

  app.use(
    cors({
      origin: process.env.FRONTEND_URL
        ? process.env.FRONTEND_URL.split(",")
        : ["https://genzeedev.vercel.app", "http://localhost:5173"],
      credentials: true,
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  app.use("/api", dataRoutes);
  app.use("/api", contactRoutes);

  return app;
};

const startServer = async () => {
  try {
    await connectDB();
    const app = createApp();
    const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
