import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { content } from "./data";

const aboutBackgroundImage1 =
  "https://archello.s3.eu-central-1.amazonaws.com/images/2022/05/11/pair-rio-bravo-tailor-shop-shops-archello.1652227592.488.jpg";
const aboutBackgroundImage2 =
  "https://manofmany.com/wp-content/uploads/2017/05/Oscar-Hunt-Tailors-14-Best-Tailors-and-Bespoke-Suit-Shops-in-Melbourne.jpg";

function AboutUs() {
  const { aboutContent, storyContent } = content;

  return (
    <Container
      //   disableGutters
      maxWidth={false}
      className='flexColumn'
      sx={{
        height: 1,
        width: 1,
        padding: { xxs: "2rem 0", sm: 4 },
        marginTop: 4,
        gap: { xxs: 2, lg: 4 },

        // border: 0,
      }}
    >
      <Box
        sx={{
          width: 1,
          //   border: 0,
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", lg: "1fr .75fr" },
          gridTemplateRows: { xxs: "auto 1fr", lg: "1fr" },
          justifyItems: "center",
          gap: { xxs: 2, lg: 4 },
        }}
      >
        <Box
          className='flexColumn'
          sx={{
            width: 1,
            // border: 0,
            gap: 4,
            padding: 2,
          }}
        >
          <Typography
            className='flexRow'
            variant='heading3'
            sx={{
              height: 75,
              width: 1,
              backgroundColor: "#FAF0E6",
            }}
          >
            {aboutContent.title}
          </Typography>
          {aboutContent.content.map(description => (
            <Typography variant='p'>{description}</Typography>
          ))}
        </Box>
        <Box
          component='img'
          src={aboutBackgroundImage1}
          alt='Tailor Store'
          sx={{
            width: 1,
            maxWidth: { xxs: 1, sm: 750, lg: 1 },
            height: { xxs: 350, lg: 1 },
            borderRadius: { xxs: 0, sm: 2 },
            objectFit: "cover", // Ensure image covers the entire space
            objectPosition: "center", // Center image within the container
          }}
        />
      </Box>
      <Box className='flexColumn' sx={{ gap: 4, padding: 2 }}>
        <Typography variant='heading3' sx={{ width: 1, textAlign: "left" }}>
          {storyContent.title}
        </Typography>
        {storyContent.content.map(description => (
          <Typography variant='p'>{description}</Typography>
        ))}
      </Box>
    </Container>
  );
}

export default AboutUs;
