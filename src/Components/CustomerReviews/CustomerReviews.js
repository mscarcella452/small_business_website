import { useState, useEffect, useRef, createRef } from "react";
import { PageDiv } from "../../Helpers/HelperComponents";
import { Container, Box, Typography, IconButton } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import { reviews, reviewBackgroundImage } from "./data";

function CustomerReviews() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef();
  const reviewRefs = useRef([]);

  // Populate reviewRefs with refs for each customer review card
  reviewRefs.current = Array(reviews.length)
    .fill()
    .map(() => createRef());

  useEffect(() => {
    const calculateTallestHeight = () => {
      // Reset heights of review cards
      reviewRefs.current.forEach(ref => {
        if (ref.current) {
          ref.current.style.height = "auto";
        }
      });
      // Find the height of the tallest review card
      let tallestHeight = 0;
      reviewRefs.current.forEach(ref => {
        if (ref.current) {
          tallestHeight = Math.max(tallestHeight, ref.current.clientHeight);
        }
      });

      // Set the height of the container to the tallest review card height
      const container = containerRef.current;
      if (container) {
        container.style.height = `${tallestHeight}px`;
      }
      // Set the height of each review card to the tallestHeight
      reviewRefs.current.forEach(ref => {
        if (ref.current) {
          ref.current.style.height = `${tallestHeight}px`;
        }
      });
    };

    calculateTallestHeight(); // Initial calculation

    const debounce = (func, delay) => {
      let timeoutId;
      return function (...args) {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    };

    const handleResize = debounce(() => {
      calculateTallestHeight();
    }, 1000); // Adjust the delay time as needed

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePrevReview = () =>
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );

  const handleNextReview = () =>
    setCurrentImageIndex(prevIndex =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
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
          backgroundImage: `url(${reviewBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
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
      <Container
        ref={containerRef}
        maxWidth={false}
        sx={{ zIndex: 1, position: "relative", overflow: "hidden" }}
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
            zIndex: 2,
          }}
        >
          <CarouselButton onClick={handlePrevReview} prevDirection />
          <CarouselButton onClick={handleNextReview} />
        </Box>
        {reviews.map((currentReview, index) => (
          <Box
            className='flexColumn'
            key={index}
            ref={reviewRefs.current[index]}
            sx={{
              position: "absolute",
              left: 0,
              right: 1,
              width: 1,
              transform: `translateX(${(index - currentImageIndex) * 100}%)`,
              transition: "all .75s ease",
              gap: { xxs: 2, md: 3.5 },
              justifyContent: "space-between",
              opacity: currentImageIndex === index ? 1 : 0.15,
              padding: 4,
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
      </Container>
    </PageDiv>
  );
}

export default CustomerReviews;

function CarouselButton({
  prevDirection,
  onClick,
  color = "primary.main",
  fontSize = { xxs: 18, mobile: 20, sm: 40, md: 50 },
}) {
  const transform = prevDirection && "rotate(180deg)";
  return (
    <IconButton
      onClick={onClick}
      sx={{ color: color, fontSize: fontSize, transform: transform }}
    >
      <ArrowForwardIosIcon sx={{ fontSize: "inherit" }} />
    </IconButton>
  );
}

function ReviewCard({ review, translate = 0, opacity, currentCard }) {
  return (
    <Box
      sx={{
        width: 1,
        height: 1,

        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,

        // background: "red",
        overflow: "hidden",
      }}
    >
      <Box
        className='flexColumn'
        sx={{
          transform: translate,
          transition: currentCard
            ? "opacity 1s ease, transform 1s ease"
            : "opacity 1s ease",
          backgroundColor: "#fff",
          opacity: opacity,
          height: 1,
          zIndex: currentCard ? 10 : -1,
        }}
      >
        <Typography variant='heading3' sx={{ color: "secondary.light" }}>
          {review.name}
        </Typography>
        <Typography variant='body1' sx={{ color: "#000" }}>
          {review.review}
        </Typography>
      </Box>
    </Box>
  );
}
