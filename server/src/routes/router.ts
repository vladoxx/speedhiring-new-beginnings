import { Router } from "express";
import userRoutes from "./user.routes";
import companyRoutes from "./company.routes";
import curriculumRoutes from "./curriculum.routes";

const router = Router();

router.use("/", userRoutes);
router.use("/", companyRoutes);
router.use("/", curriculumRoutes);

export default router;
