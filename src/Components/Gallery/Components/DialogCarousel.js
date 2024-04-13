// import React from "react";
import { useDialogCarousel } from "../../../Helpers/Carousel/Hooks/CarouselHooks";
import { Box, Dialog } from "@mui/material";
import CarouselContentWrapper from "../../../Helpers/Carousel/CarouselContentWrapper";
import DialogButton from "./DialogButton";

function DialogCarousel({ open, handleClose, images, startIndex, children }) {
  const [currentIndex, handlePrevSlide, handleNextSlide] = useDialogCarousel(
    images.length,
    startIndex
  );

  return (
    <Dialog
      open={open}
      onClick={handleClose}
      // fullWidth
      // maxWidth='xl'
      fullScreen
      //   sx={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      PaperProps={{
        sx: {
          backgroundColor: "transparent",
          padding: { xxs: 2, sm: 4 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "none",
        },
      }}
    >
      <DialogButton onClick={handlePrevSlide} previousDirection />
      <Box
        onClick={e => e.stopPropagation()}
        sx={{
          width: 1,
          aspectRatio: 1,
          maxHeight: { xxs: 450, sm: 550, md: 600 },
          maxWidth: { xxs: "xs", mobile: "mobile", sm: "sm", md: "md" },
          boxShadow: 2,
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
          "&:after": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#333",
            opacity: 0.15,
          },
        }}
      >
        <CarouselContentWrapper
          currentIndex={currentIndex}
          content={images}
          opacity={0.75}
        >
          {children}
        </CarouselContentWrapper>
      </Box>
      <DialogButton onClick={handleNextSlide} />
    </Dialog>
  );
}

export default DialogCarousel;
