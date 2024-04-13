import { useState, Children } from "react";
import { Box } from "@mui/material";
import CarouselButton from "./CarouselButton";

function Carousel({ CarouselButtonProps, children }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const handlePrevSlide = () =>
    setCurrentSlideIndex(prevIndex =>
      prevIndex === 0 ? Children.count(children) - 1 : prevIndex - 1
    );

  const handleNextSlide = e =>
    setCurrentSlideIndex(prevIndex =>
      prevIndex === Children.count(children) - 1 ? 0 : prevIndex + 1
    );

  return (
    <Box
      sx={{
        width: 1,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        className='flexRow'
        sx={{
          width: 1,
          height: { xxs: 150, sm: 200, md: 1 },
          justifyContent: "space-between",
          position: "absolute",
          top: { xxs: "2rem", md: 0 },
          left: 0,
          right: 0,
          zIndex: 1,
        }}
      >
        <CarouselButton
          onClick={handlePrevSlide}
          previousDirection
          props={CarouselButtonProps}
        />
        <CarouselButton onClick={handleNextSlide} props={CarouselButtonProps} />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          transition: "transform .5s ease",
          transform: `translateX(-${currentSlideIndex * 100}%)`,
          width: 1,
        }}
      >
        {Children.map(children, (child, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 100%",
              width: 1,
              opacity: currentSlideIndex === index ? 1 : 0.15,
              transition: "opacity .5s ease",
            }}
          >
            {child}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Carousel;
