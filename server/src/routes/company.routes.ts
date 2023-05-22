import { Router } from "express";
const router = Router();

import * as companyController from "../controllers/company.controller";

router.get("/companies", companyController.getAllCompanies);
router.get("/company/:id", companyController.getOneCompany);
router.get("/company/:id/jobs", companyController.getJobsCompany);
router.post("/company/register", companyController.createCompany);
router.put("/company/:id", companyController.updateCompany);
router.delete("/company/:id", companyController.deleteCompany);

export default router;
