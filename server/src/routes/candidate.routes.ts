import { Router } from "express";
const router = Router();

import * as candidateController from "../controllers/candidate.controller";

router.post("/application", candidateController.createApplication);
router.get("/applications", candidateController.getAllApplications);

export default router;
