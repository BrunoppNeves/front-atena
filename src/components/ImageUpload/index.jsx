import React, { useState, useEffect } from "react";

import { EnviaFotoContainer } from "./style";

export default function ImageUpload(props) {
  useEffect(() => {
    if (props.images.length > 2) {
      const newImageUrls = [];
      props.images.forEach((image) => newImageUrls.push(URL.createObjectURL(image)));
      props.setImageURLs(newImageUrls);
      console.log(props.images);  
    }
  }, [props.images]);
  
  function onImageChange(e) {
    if (e.target.files.length > 2) {
      console.log('aaaaaaaaaaaaaa');
      alert("Por favor, selecione no máximo 2 fotos");
      return;
    }
    props.setImages([...e.target.files]);
  }

  return (
    <EnviaFotoContainer>
      <input type="file" multiple accept="image/jpeg" onChange={onImageChange} />
      {props.imageURLs.map((imageSrc) => (
        <img src={imageSrc} alt="uploaded" />
      ))}
    </EnviaFotoContainer>
  );
}
