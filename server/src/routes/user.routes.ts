import { Router } from "express";
const router = Router();

import * as userController from "../controllers/user.controller";

router.get("/user", userController.getAllUsers);
router.get("/user/:id", userController.getOneUser);
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user", userController.deleteUser);

export default router;
