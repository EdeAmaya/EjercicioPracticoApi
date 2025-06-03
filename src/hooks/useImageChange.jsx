import { useState } from "react";

const useManageImage = () => {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...newPreviews]);
    setImageFiles((prev) => [...prev, ...files]);

    e.target.value = null;
  };

  const removeImageAtIndex = (index) => {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return {
    imagePreviews,
    imageFiles,
    setImagePreviews,
    setImageFiles,
    handleImageChange,
    removeImageAtIndex,
  };
};

export default useManageImage;