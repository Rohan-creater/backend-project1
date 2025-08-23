import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    const response = await cloudinary.uploader.upload(localFilePath, { // upload file
      resource_type: "auto",
    });                                                                //file uploaded
    return response;
  } catch (error) {
    fs.ulikeSync(localFilePath); // deletes failed upload form local system
    return null;
  }
};

export { uploadOnCloudinary };
