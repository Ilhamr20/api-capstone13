import dotenv from "dotenv";
import express from "express";
import router from "./routes/index.js";
import sequelize from "./config/database.js";

dotenv.config();

const app = express();

app.use("/static", express.static("public"));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use(router);

sequelize
  .sync()
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });

const PORT = process.env.APP_PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
