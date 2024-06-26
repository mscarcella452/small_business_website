import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { content } from "./data";
import { PageDiv, BoxImg } from "../../Helpers/HelperComponents";

const aboutBackgroundImage1 =
  "https://archello.s3.eu-central-1.amazonaws.com/images/2022/05/11/pair-rio-bravo-tailor-shop-shops-archello.1652227592.488.jpg";
const aboutBackgroundImage2 =
  "https://manofmany.com/wp-content/uploads/2017/05/Oscar-Hunt-Tailors-14-Best-Tailors-and-Bespoke-Suit-Shops-in-Melbourne.jpg";

function AboutUs() {
  const { aboutContent, storyContent } = content;

  return (
    <PageDiv
      className='flexColumn'
      sx={{ border: 0, gap: { xxs: 2, sm: 3, lg: 4 } }}
    >
      <Box className='flexColumn' gap={2} marginBottom={5}>
        <Typography variant='label' sx={{ textTransform: "uppercase" }}>
          BEHIND THE SEAMS
        </Typography>
        <Typography variant='heading2'>Discover Our Story</Typography>
      </Box>
      <Container
        sx={{
          width: 1,
          // border: 1,
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", md: "1fr .75fr" },
          gridTemplateRows: { xxs: "auto 1fr", lg: "1fr" },
          justifyItems: "center",
          gap: "inherit",
        }}
      >
        <Box
          className='flexColumn'
          sx={{
            width: 1,
            // border: 0,
            gap: "inherit",
          }}
        >
          {storyContent.content.map(description => (
            <Typography variant='p'>{description}</Typography>
          ))}
        </Box>

        <BoxImg src={aboutBackgroundImage1} alt='Tailor Store' />
      </Container>
    </PageDiv>
  );
}

export default AboutUs;
