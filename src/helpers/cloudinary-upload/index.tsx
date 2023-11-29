import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import { Buffer } from "buffer";
import "@/config/cloudinary-config";

type UploadError = { message: string; status?: number };

const createUploadError = (message: string, status: number = 400): UploadError => {
  return { message, status };
};

const CloudinaryImageUploader = async (file: File, path: string): Promise<UploadApiResponse | UploadError> => {
  if (!file) {
    return createUploadError("An image must be selected");
  }

  if (!file.type.startsWith("image/")) {
    return createUploadError("The file must be an image");
  }

  if (file.size > 1 * 1024 * 1024) {
    return createUploadError("The image must be smaller than 1MB ");
  }

  const fileName = file.name.replace(/ /g, "-");

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  return new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      {
        file: buffer,
        resource_type: "image",
        public_id: `${path}/${fileName}`,
        quality: "auto",
        fetch_format: "auto",
        timeout: 10000,
        overwrite: false,
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result as UploadApiResponse);
        }
      }
    );

    stream.end(buffer);
  });
};

export default CloudinaryImageUploader;
