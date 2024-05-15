import express from "express";
import v1 from "./router/v1";
const app = express();

app.get("/", (req, res) => {
  res.status(200).send({
    msg: "hello",
  });
});

app.use("/v1", v1);
app.listen(5000, () => {
  console.log("listinig to port 5000");
});
