import { Router } from "express";
const router = Router();

import * as companyController from "../controllers/company.controller";

router.get("/company", companyController.getAllCompanies);
router.get("/company/:id", companyController.getOneCompany);
router.post("/company", companyController.createCompany);
router.put("/company/:id", companyController.updateCompany);
router.delete("/company/:id", companyController.deleteCompany);

export default router;
