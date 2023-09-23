// packages
import express, { urlencoded, json } from "express";
import cors from "cors";
import olympicWinnerRouter from "./olympicWinners/routes.js";

const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json("Server is Running ");
});

app.use("/api/olympic", olympicWinnerRouter);

app.listen(PORT, () => {
  console.log(`Server is Running on Port ${PORT}`);
});
