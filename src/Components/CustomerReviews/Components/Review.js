// import React from 'react'
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

function Review({ reviewContent }) {
  const { image, name, rating, review } = reviewContent;
  return (
    <Box
      className='flexColumn'
      sx={{
        height: 1,
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
        src={image}
        alt={`${name} customer review`}
        sx={{
          width: { xxs: 150, sm: 200 },
          aspectRatio: 1,
          borderRadius: 2,
          objectFit: "cover",
          objectPosition: "top center",
        }}
      />

      <Typography variant='heading3' sx={{ color: "secondary.light" }}>
        {name}
      </Typography>

      <Box className='flexRow review' gap={1}>
        {Array.from({ length: rating }).map(star => (
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
        {review}
      </Typography>
    </Box>
  );
}

export default Review;
