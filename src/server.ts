import "reflect-metadata";
import { AppDataSource } from "./config/data-source";
import app from "./app";

AppDataSource.initialize()
  .then(() => {
    console.log("✅ Database connected");
    app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
  })
  .catch((err: any) => console.error("❌ DB init error:", err));