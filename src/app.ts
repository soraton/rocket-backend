import express from "express";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());

// Routes
app.use("/api/userabca", userRoutes);
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default app;