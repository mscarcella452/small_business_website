import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const dummyLogo =
  "https://webstockreview.net/images/clipart-scissors-craft-scissors-16.png";

const dummyBackground2 = "https://wallpaperaccess.com/full/4870403.jpg";
const dummyBackground =
  "https://alterations-express.com/wp-content/uploads/2021/09/4.png";

function HeroSection() {
  return (
    <>
      <Box
        sx={{
          height: "calc(100vh - 70px)",
          width: 1,
          padding: 4,
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -2,
            background: `url(${dummyBackground}) top center / cover no-repeat`,
          },
          "&:after": {
            content: "''",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1,
            backgroundColor: "#000",
            opacity: 0.6,
          },
        }}
      >
        <Container
          className='flexColumn'
          sx={{ width: 1, height: 1, border: 0, gap: 4, zIndex: 2 }}
        >
          <Typography
            variant='heading1'
            color='#FAF0E6'
            // sx={{
            //   textShadow:
            //     "-1px -1px 0 #F2F2F2, 1px -1px 0 #F2F2F2, -1px 1px 0 #F2F2F2, 1px 1px 0 #F2F2F2",
            // }}
          >
            Thomas Mitchell Clothier
          </Typography>
          <Typography variant='heading3' color='#fff'>
            Crafting Elegance Stitch by Stitch: Your Tailoring Destination
          </Typography>

          <Button
            sx={{
              backgroundColor: "secondary.main",
              color: "#fff",
              borderRadius: "5px",
              width: 1,
              maxWidth: 400,
              padding: 1,
              // boxShadow: 2,
            }}
          >
            Book an appointment today!
          </Button>
          {/* <Typography variant='p' color='#fff'>
          1 Broadway, New York, NY, USA
        </Typography> */}
        </Container>
      </Box>
    </>
  );
}

export default HeroSection;
