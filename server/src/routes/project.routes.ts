import { Router } from "express";
const router = Router();

import * as projectController from "../controllers/project.controller";
import * as authMiddleware from "../middlewares/auth";

router.get(
  "/projects",
  projectController.userAuth,
  authMiddleware.createValidator
);

export default router;
