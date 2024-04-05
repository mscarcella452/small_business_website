import React from "react";
import { Box, Typography, Button } from "@mui/material";

const dummyLogo =
  "https://webstockreview.net/images/clipart-scissors-craft-scissors-16.png";

function Navbar() {
  return (
    <Box
      className='flexRow'
      sx={{
        height: 70,
        width: 1,
        padding: 2,
        backgroundColor: "secondary.main",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 10,
      }}
    >
      <Box className='flexRow' sx={{ height: 1, gap: 2 }}>
        <Box
          sx={{
            aspectRatio: 1,
            height: 1,
            border: 1,
            backgroundImage: `url(${dummyLogo})`,
            backgroundSize: "contain",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <Typography variant='subHeading' color='#fff'>
          TMC
        </Typography>
      </Box>
      <Box
        className='flexRow'
        sx={{ height: 1, gap: 2, justifyContent: "flex-end" }}
      >
        <Typography variant='subHeading' color='#fff'>
          Hours
        </Typography>
        <Button
          sx={{
            backgroundColor: "#C55333",
            color: "#fff",
            borderRadius: "5px",

            padding: 1,
            // boxShadow: 2,
          }}
        >
          Contact Us
        </Button>
      </Box>
    </Box>
  );
}

export default Navbar;
