import { Router } from "express";
const router = Router();

import * as curriculumController from "../controllers/curriculum.controller";

router.get("/curriculums", curriculumController.getAllCurriculums);
router.get("/curriculum/:id", curriculumController.getOneCurriculum);
router.post("/curriculum", curriculumController.createCurriculum);
router.put("/curriculum/:id", curriculumController.updateCurriculum);
router.delete("/curriculum/:id", curriculumController.deleteCurriculum);
router.delete("/curriculums", curriculumController.deleteAllCurriculums);

// Education
router.post(
  "/curriculum/:curriculumId/education",
  curriculumController.addEducation
);
router.put(
  "/curriculum/:curriculumId/education/:educationId",
  curriculumController.updateEducation
);
router.delete(
  "/curriculum/:curriculumId/education/:educationId",
  curriculumController.deleteEducation
);

export default router;
