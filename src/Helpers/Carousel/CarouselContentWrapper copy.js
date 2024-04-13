import React from "react";
import { Box } from "@mui/material";

function CarouselContentWrapper({
  currentIndex,
  content,
  opacity = 1,
  children,
}) {
  return (
    <Box sx={{ overflow: "hidden", width: 1, backgroundColor: "blue" }}>
      <Box
        sx={{
          //   display: "flex",
          //   alignItems: "center",
          //   transition: "transform .5s ease",
          //   transform: `translateX(-${currentIndex * 100}%)`,
          //   width: 1,
          //   height: 1,

          //   display: "flex",
          //   alignItems: "center",
          transition: "transform .5s ease",
          transform: `translateX(-${currentIndex * 100}%)`,
          width: 1,

          display: "grid",
          gridTemplateRows: "1fr",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        }}
      >
        {content.map((params, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 100%",
              width: 1,
              opacity: currentIndex === index ? 1 : opacity,
              transition: "opacity .5s ease",
            }}
          >
            {children(params, index)}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default CarouselContentWrapper;
