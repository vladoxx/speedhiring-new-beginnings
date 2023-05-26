import { Router } from "express";
const router = Router();

import * as companyController from "../controllers/company.controller";
import * as jobController from "../controllers/job.controller";

router.get("/companies", companyController.getAllCompanies);
router.get("/company/:id", companyController.getOneCompany);
router.get("/company/:id/jobs", companyController.getJobsCompany);
router.post("/company/register", companyController.createCompany);
router.post("/company/login", companyController.loginCompany);
router.post("/company/:companyId/job", jobController.createJob);
router.put("/company/:id", companyController.updateCompany);
router.delete("/company/:id", companyController.deleteCompany);

export default router;
