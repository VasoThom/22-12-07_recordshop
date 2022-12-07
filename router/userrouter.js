import express from "express";
import * as controller from "../controller/userController.js";

const router = express.Router();

router.get("/", controller.getAllusers);
router.get("/:id", controller.getuser);

router.post("/", controller.postAllusers);
router.put("/:id", controller.putAllusers);
router.delete("/:id", controller.deleteAllusers);

export default router;
