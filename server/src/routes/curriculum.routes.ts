import { Router } from "express";
const router = Router();

import * as curriculumController from "../controllers/curriculum.controller";

router.get("/curriculums", curriculumController.getAllCurriculums);
router.get("/curriculum/:id", curriculumController.getOneCurriculum);
router.post("/curriculum", curriculumController.createCurriculum);
router.post(
  "/curriculum/:curriculumId/education",
  curriculumController.addEducation
);
router.put("/curriculum/:id", curriculumController.updateCurriculum);
router.delete("/curriculum/:id", curriculumController.deleteCurriculum);
router.delete(
  "/curriculum/:curriculumId/education/:educationId",
  curriculumController.deleteEducation
);
router.delete("/curriculums", curriculumController.deleteAllCurriculums);

export default router;
