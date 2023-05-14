import { Router } from "express";
const router = Router();

import * as companyController from "../controllers/company.controller";

router.post("/company", companyController.createCompany);
router.get("/company", companyController.getAllCompanies);

export default router;
