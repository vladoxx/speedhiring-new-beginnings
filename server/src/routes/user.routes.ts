import { Router } from "express";
const router = Router();

import * as userController from "../controllers/user.controller";

router.get("/users", userController.getAllUsers);
router.get("/user/:id", userController.getOneUser);
router.post("/user", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

export default router;
