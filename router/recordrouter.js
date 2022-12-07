import express from "express";
import * as controller from "../controller/recordController.js";

const router = express.Router();

router.get("/", controller.getAllrecord);
router.get("/:id", controller.getrecord);

router.post("/", controller.postAllrecord);
router.put("/:id", controller.putAllrecord);
router.delete("/:id", controller.deleteAllrecord);

export default router;
