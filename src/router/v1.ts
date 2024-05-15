import { Router } from "express";
import prisma from "../db/prisma";

const v1 = Router();
v1.get("/", (req, res) => {
  res.status(200).send({
    msg: "hello  from v1",
  });
});

export default v1;
