// import react from "react";
import { PageDiv } from "../../Helpers/HelperComponents";
import { Container, Box } from "@mui/material";
import { reviews, reviewBackgroundImage } from "./data";
import CarouselContentWrapper from "../../Helpers/Carousel/CarouselContentWrapper";
import { useCarousel } from "../../Helpers/Carousel/Hooks/CarouselHooks";
import CarouselButton from "./Components/CarouselButton";
import Review from "./Components/Review";

function CustomerReviews() {
  const [currentIndex, handlePrevSlide, handleNextSlide] = useCarousel(
    reviews.length
  );

  return (
    <PageDiv
      sx={{
        position: "relative",
        "&:before": {
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          background: `url(${reviewBackgroundImage}) top center / cover no-repeat`,
          zIndex: -1,
        },
        "&:after": {
          backgroundColor: "secondary.dark",
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: 0.8,
          zIndex: -1,
        },
      }}
    >
      <Container disableGutters maxWidth={false} sx={{ position: "relative" }}>
        <CarouselButton onClick={handlePrevSlide} previousDirection />
        <CarouselContentWrapper
          currentIndex={currentIndex}
          content={reviews}
          opacity={0.15}
        >
          {(reviewContent, index) => (
            <Box
              key={index}
              sx={{
                opacity: currentIndex === index ? 1 : 0.15,
                transition: "opacity .5s ease",
              }}
            >
              <Review reviewContent={reviewContent} />
            </Box>
          )}
        </CarouselContentWrapper>

        <CarouselButton onClick={handleNextSlide} />
      </Container>
    </PageDiv>
  );
}

export default CustomerReviews;
