import { Request, Response } from "express";
import { asyncHandler } from "../utils/asyncHandler.ts";
import { ApiResponse } from "../utils/apiResponseHandler.ts";

export const uploadFile = asyncHandler(async (req: Request, res: Response) => {
    // req.file will be available here due to multer
    const localFilePath = req.file?.path;

    if (!localFilePath) {
        res.status(400).json({ error: "No file was uploaded" });
        return;
    }

    // Usually you would upload this file to Cloudinary, S3, etc.
    // here we just return the local path.

    res.status(200).json(
        new ApiResponse(200, { filePath: localFilePath }, "File uploaded successfully")
    );
});