import express from "express";
import cors from "cors";

import router from "./router/index.js";

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api", router);

// 404
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handler
app.use((err, req, res) => {
  const status = err.status || 500;
  res.status(status).json({
    message: err.message || "Server error",

    ...(process.env.NODE_ENV === "development" ? { stack: err.stack } : {}),
  });
});

export default app;
