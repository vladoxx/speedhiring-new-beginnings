import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const createValidator: RequestHandler = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ msj: "No token provided" });
  }

  const parts = authHeader.split(" ");

  if (!(parts.length === 2)) {
    return res.status(401).json({ msj: "Token error" });
  }

  const [scheme, token] = parts;

  if (!/^Bearer$/i.test(scheme)) {
    return res.status(401).json({ msg: "Token malformatted" });
  }

  jwt.verify(token, process.env.SECRET || "", (err, decoded) => {
    if (err) {
      return res.status(401).json({ msg: "Token invalid" });
    }

    // req.userId = decoded.id;

    return next();
  });
};
