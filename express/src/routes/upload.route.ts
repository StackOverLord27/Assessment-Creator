import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.ts";
import { uploadFile } from "../controllers/upload.controller.ts";

const router = Router();

router.route("/file").post(upload.single("file"), uploadFile);

export default router;