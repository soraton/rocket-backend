import fs from "fs";
import path from "path";

const dirs = [
  "src/config",
  "src/controllers",
  "src/entities",
  "src/middlewares",
  "src/routes",
  "src/services",
  "src/utils",
];

const files = [
  "src/app.ts",
  "src/server.ts",
  "src/config/data-source.ts",
  "src/config/redisClient.ts",
  "src/controllers/user.controller.ts",
  "src/entities/User.ts",
  "src/routes/user.routes.ts",
  "src/services/user.service.ts",
  "src/utils/logger.ts",
  ".env",
];

dirs.forEach((dir) => fs.mkdirSync(dir, { recursive: true }));
files.forEach((file) => fs.writeFileSync(file, "", { flag: "wx" }));

console.log("✅ Express API folder structure created successfully!");
