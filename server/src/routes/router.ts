import { Router } from "express";
import userRoutes from "./user.routes";
import companyRoutes from "./company.routes";
import curriculumRoutes from "./curriculum.routes";
import jobRoutes from "./job.routes";
import candidateRoutes from "./candidate.routes";
import projectRoutes from "./project.routes";

const router = Router();

router.use("/", userRoutes);
router.use("/", companyRoutes);
router.use("/", curriculumRoutes);
router.use("/", jobRoutes);
router.use("/", candidateRoutes);
router.use("/", projectRoutes);

export default router;
