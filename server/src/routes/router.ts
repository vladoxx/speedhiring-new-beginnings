import { Router } from "express";
import userRoutes from "./user.routes";
import companyRoutes from "./company.routes";

const router = Router();

router.use("/", userRoutes);
router.use("/", companyRoutes);

export default router;
