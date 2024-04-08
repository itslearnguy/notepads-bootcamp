import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({
    hello: "world",
  });
});

const host = "localhost";
const port = 8080;

app.listen(port, host, () => {
  console.log("servidor inicializado");
});
