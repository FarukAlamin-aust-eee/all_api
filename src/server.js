import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";

const app = express();

app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(",") || true,
  credentials: true
}));

app.get("/", (_req, res) => res.json({ ok: true, service: "EMS API" }));

// Mount auth routes
app.use("/auth", authRoutes);

app.use((req, res) => res.status(404).json({ error: "not found" }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`EMS API running on http://localhost:${PORT}`));
