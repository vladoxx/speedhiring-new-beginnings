import { Router } from "express";
const router = Router();

import * as curriculumController from "../controllers/curriculum.controller";

router.post("/curriculum", curriculumController.createCurriculum);
router.get("/curriculum", curriculumController.getAllCurriculums);

export default router;
