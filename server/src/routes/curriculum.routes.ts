import { Router } from "express";
const router = Router();

import * as curriculumController from "../controllers/curriculum.controller";

router.get("/curriculum", curriculumController.getAllCurriculums);
router.get("/curriculum/:id", curriculumController.getOneCurriculum);
router.post("/curriculum", curriculumController.createCurriculum);
router.put("/curriculum/:id", curriculumController.updateCurriculum);
router.delete("/curriculum/:id", curriculumController.deleteCurriculum);

export default router;
