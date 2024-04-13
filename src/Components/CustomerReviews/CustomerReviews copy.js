// import react from "react";
import { PageDiv } from "../../Helpers/HelperComponents";
import { Container, Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { reviews, reviewBackgroundImage } from "./data";
import Carousel from "../../Helpers/Carousel/Carousel";

function CustomerReviews() {
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
      <Container maxWidth={false}>
        <Carousel
          CarouselButtonProps={{
            color: "primary.main",
          }}
        >
          {reviews.map((currentReview, index) => (
            <Box
              className='flexColumn'
              key={index}
              sx={{
                gap: { xxs: 2, md: 3.5 },
                padding: { xxs: 2, md: 3.5 },
                position: "relative",
                justifyContent: "space-between",

                "&:before": {
                  content: "''",
                  position: "absolute",
                  top: 0,
                  height: 1,
                  width: 1,
                  backgroundColor: "secondary.dark",
                  maxWidth: "md",
                  zIndex: -1,
                  borderRadius: 2,
                  opacity: 0.9,
                },
              }}
            >
              <Box
                component='img'
                src={currentReview.image}
                alt={`${currentReview.name} customer review`}
                sx={{
                  width: { xxs: 150, sm: 200 },
                  aspectRatio: 1,
                  borderRadius: 2,
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />

              <Typography variant='heading3' sx={{ color: "secondary.light" }}>
                {currentReview.name}
              </Typography>

              <Box className='flexRow review' gap={1}>
                {Array.from({ length: currentReview.rating }).map(star => (
                  <StarIcon
                    sx={{
                      color: "gold",
                      fontSize: { xxs: 16, mobile: 20, md: 25 },
                    }}
                  />
                ))}
              </Box>

              <Typography
                variant='p'
                lineHeight={2}
                sx={{ color: "#FAF0E6", textAlign: "center", maxWidth: "sm" }}
              >
                {currentReview.review}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Container>
    </PageDiv>
  );
}

export default CustomerReviews;
