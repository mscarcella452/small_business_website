import React from "react";
import { Box } from "@mui/material";

function CarouselContentWrapper({
  currentIndex,
  content,
  opacity = 1,
  children,
}) {
  return (
    <Box sx={{ overflow: "hidden", width: 1, height: 1 }}>
      <Box
        sx={{
          transition: "transform .75s ease",
          transform: `translateX(-${currentIndex * 100}%)`,
          width: 1,
          height: 1,

          display: "grid",
          gridTemplateRows: "100%",
          gridTemplateColumns: `repeat(${content.length}, 100%)`,
        }}
      >
        {/* {content.map((params, index) => children(params, index))} */}
        {content.map((params, index) => children(params, index))}
      </Box>
    </Box>
  );
}

export default CarouselContentWrapper;
