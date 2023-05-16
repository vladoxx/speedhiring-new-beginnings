import { RequestHandler, Router } from "express";
const router = Router();

export const userAuth: RequestHandler = async (req, res) => {
  res.json({ msg: true });
};

//Fiquei em que não consigp executar o middleware
