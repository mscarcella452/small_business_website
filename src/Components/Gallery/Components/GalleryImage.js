import React from "react";
import { Box } from "@mui/material";

function GalleryImage({ image, index }) {
  return (
    <Box
      key={index}
      component='img'
      src={image}
      alt={`gallery image ${index + 1}`}
      sx={{
        height: 1,
        width: 1,
        borderRadius: 2,
        objectFit: "cover",
        objectPosition: "top center",
      }}
    />
  );
}

export default GalleryImage;
