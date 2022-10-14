import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

dotenv.config(); // init dotenv

const port = process.env.SERVER_PORT;
const app = express();

app.use(
  cors({
    origin: "*",
  })
)
app.use(bodyParser.json());

// 错误处理
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.send({ message: err.message });
});

// 监听3000端口
app.listen(port, () => {
  console.log("MarkDoc系统启动成功，正在监听本机 8001 端口!");
});
