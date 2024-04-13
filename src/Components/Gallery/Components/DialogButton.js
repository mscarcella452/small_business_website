import React from "react";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function DialogButton({ onClick, previousDirection }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        right: !previousDirection && { xxs: "1.5rem", mobile: "2rem" },
        left: previousDirection && { xxs: "1.5rem", mobile: "2rem" },
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
          backgroundColor: "#333",
          opacity: { xxs: 0.65, md: 0.5 },
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

export default DialogButton;
