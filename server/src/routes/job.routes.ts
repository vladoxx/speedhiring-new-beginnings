import { Router } from "express";
const router = Router();

import * as jobController from "../controllers/job.controller";

router.get("/jobs", jobController.getAllJobs);
router.get("/job/:id", jobController.getOneJob);
router.post("/job", jobController.createJob);
router.put("/job/:id", jobController.updateJob);
router.delete("/job/:id", jobController.deleteJob);
router.delete("/jobs", jobController.deleteAllJobs);

export default router;
