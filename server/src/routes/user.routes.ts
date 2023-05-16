import { Router } from "express";
const router = Router();

import * as userController from "../controllers/user.controller";

router.get("/users", userController.getAllUsers);
router.get("/user/:id", userController.getOneUser);
router.get("/user/:id/jobs", userController.getAllJobApplications);
router.post("/register", userController.createUser);
router.post("/login", userController.loginUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

export default router;
