import React from "react";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function CarouselButton({ onClick, previousDirection }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        top: { xxs: 75, md: "auto" },
        right: !previousDirection && 10,
        left: previousDirection && 10,
        // right: !previousDirection && { xxs: "1.5rem", mobile: "2rem" },
        // left: previousDirection && { xxs: "1.5rem", mobile: "2rem" },
        zIndex: 2,
        transform: previousDirection && "rotate(180deg)",
        overflow: "hidden",
        "&::before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "secondary.light",
          // opacity: { xxs: 0.65, md: 0.25 },
          opacity: 0.1,
        },
      }}
    >
      <ArrowForwardIosIcon
        fontSize='inherit'
        sx={{
          fontSize: { xxs: 30, md: 40 },
          padding: "5px",
          zIndex: 1,
          color: "#fff",
        }}
      />
    </IconButton>
  );
}

export default CarouselButton;
