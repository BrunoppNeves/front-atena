import React, { useState, useEffect } from "react";

import { EnviaFotoContainer } from "./style";

export default function ImageUpload() {
  const [images, setImages] = useState([]);
  const [imageURLs, setImageURLs] = useState([]);

  useEffect(() => {
    if (images.length > 1) return;
    const newImageUrls = [];
    images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
    setImageURLs(newImageUrls);
  }, [images]);

  function onImageChange(e) {
    setImages([...e.target.files]);
    console.log(images);
  }

  return (
    <EnviaFotoContainer>
      <input type="file" multiple accept="image/jpeg" onChange={onImageChange} />
      {imageURLs.map((imageSrc) => (
        <img src={imageSrc} alt="uploaded" />
      ))}
    </EnviaFotoContainer>
  );
}
