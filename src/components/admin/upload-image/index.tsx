import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

const UploadImage = () => {
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newSelectedImages: File[] = [];
      const newPreviewImages: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        newSelectedImages.push(file);

        const reader = new FileReader();
        reader.onloadend = () => {
          newPreviewImages.push(reader.result as string);
          if (newPreviewImages.length === files.length) {
            setSelectedImages(newSelectedImages);
            setPreviewImages(newPreviewImages);
          }
        };
        reader.readAsDataURL(file);
      }
    } else {
      setSelectedImages([]);
      setPreviewImages([]);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" multiple onChange={handleImageChange} />
      <div className="relative h-48">
        {previewImages.map((previewImage, index) => (
          <Image key={index} src={previewImage} alt={`Preview ${index}`} fill className="h-full w-full object-contain"/>
        ))}
      </div>
    </div>
  );
};

export default UploadImage;
