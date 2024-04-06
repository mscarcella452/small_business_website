import { useState } from "react";
import { PageDiv } from "../../Helpers/HelperComponents";
import { Container, Box, Typography, IconButton, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import StarIcon from "@mui/icons-material/Star";
import { CircularProgress } from "@mui/material";

const reviewBackgroundImage =
  "https://www.epos.com.sg/wp-content/uploads/2022/05/Tailor-Singapore-Cover-Image-Opt.jpg";

const customerReviews = [
  {
    name: "Alice Johnson",
    rating: 5,
    image: "https://c.stocksy.com/a/oVu000/z9/217236.jpg",
    review:
      "Absolutely thrilled with the suit I received from Thomas Mitchell Clothier. The fit is impeccable, and the attention to detail is outstanding. Will definitely be coming back for more!",
  },
  {
    name: "Michael Smith",
    rating: 5,
    image:
      "https://i.pinimg.com/originals/07/33/ba/0733ba760b29378474dea0fdbcb97107.png",
    review:
      "Had a wonderful experience at Thomas Mitchell Clothier. From the initial consultation to the final fitting, everything was handled professionally and with care. Highly recommend!",
  },
  {
    name: "Emily Davis",
    rating: 5,
    image:
      "https://i.pinimg.com/736x/7a/d3/1a/7ad31af11e1108ed093eca1b3438bc25.jpg",
    review:
      "I've been searching for the perfect wedding dress for months, and I'm so glad I found Thomas Mitchell Clothier. They made my dream dress a reality, and I couldn't be happier!",
  },
  {
    name: "Stefon Brown",
    rating: 5,
    image:
      "https://www.ninjaonlinedating.com/images/Articles/Good_Dating_Profile_Photo.jpg",
    review:
      "Exceptional service and quality! Thomas Mitchell Clothier exceeded my expectations in every way. The team went above and beyond to ensure I was satisfied with my purchase. Highly recommend to anyone in need of custom tailoring.",
  },
  {
    name: "Sarah Wilson",
    rating: 5,
    image:
      "https://i.pinimg.com/originals/60/e0/3b/60e03b25d0829ec560b3f472e84cd23a.jpg",
    review:
      "The team at Thomas Mitchell Clothier truly understands the art of tailoring. I've never felt more confident in my clothes. Thank you for your expertise and excellent service!",
  },
];

function CustomerReviews() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevReview = () =>
    setCurrentImageIndex(prevIndex =>
      prevIndex === 0 ? customerReviews.length - 1 : prevIndex - 1
    );

  const handleNextReview = () =>
    setCurrentImageIndex(prevIndex =>
      prevIndex === customerReviews.length - 1 ? 0 : prevIndex + 1
    );

  return (
    <PageDiv
      sx={{
        position: "relative",
        overflow: "hidden",
        // backgroundColor: "secondary.dark",
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
          opacity: 0.98,
          zIndex: -1,
        },
      }}
    >
      <Container
        className='flexColumn'
        maxWidth={false}
        sx={{
          height: { xxs: 550, mobile: 600 },

          // display: "grid",
          // gridTemplateColumns: "auto 1fr auto",
          // gridTemplateRows: "1fr",

          zIndex: 1,
          gap: { xxs: 2, md: 4 },
        }}
      >
        {/* <CarouselButton onClick={handlePrevReview} prevDirection /> */}
        <Box
          sx={{
            width: 1,
            height: 1,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            className='flexRow'
            sx={{
              width: 1,
              height: 1,
              justifyContent: "space-between",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 2,
            }}
          >
            <CarouselButton onClick={handlePrevReview} prevDirection />
            <CarouselButton onClick={handleNextReview} />
          </Box>
          {customerReviews.map((currentReview, index) => (
            <Box
              className='flexColumn'
              key={index}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: 1,
                height: 1,
                transform: `translateX(${(index - currentImageIndex) * 100}%)`,
                transition: "all .75s ease",
                gap: 4,
                opacity: currentImageIndex === index ? 1 : 0.15,
              }}
            >
              <Box
                component='img'
                src={currentReview.image}
                alt={`${currentReview.name} customer review`}
                sx={{
                  width: { xxs: 150, sm: 250 },
                  aspectRatio: 1,
                  borderRadius: 2,
                  objectFit: "cover", // Ensure image covers the entire space
                  objectPosition: "top center", // Center image within the container
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
                variant='label'
                lineHeight={2}
                sx={{ color: "#FAF0E6", textAlign: "center", maxWidth: "sm" }}
              >
                {currentReview.review}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* <CarouselButton onClick={handleNextReview} /> */}
      </Container>
    </PageDiv>
  );
}

export default CustomerReviews;

function CarouselButton({ prevDirection, onClick }) {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        color: "primary.main",
        fontSize: { xxs: 18, mobile: 20, sm: 40, md: 50 },
        transform: prevDirection && "rotate(180deg)",
      }}
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
