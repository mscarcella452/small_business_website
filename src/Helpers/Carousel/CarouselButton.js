import { cloneElement } from "react";
import { IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function CarouselButton({ previousDirection, onClick, props }) {
  // props pass in color, fontSize, icon. if not passed then default to what we have
  const { color, fontSize, icon } = props;

  const IconComponent = cloneElement(icon || <ArrowForwardIosIcon />, {
    sx: {
      color: color || "#fff",
      fontSize: fontSize || { xxs: 18, mobile: 20, sm: 40, md: 50 },
      transform: previousDirection && "rotate(180deg)",
    },
  });

  return <IconButton onClick={onClick}>{IconComponent}</IconButton>;
}

export default CarouselButton;
