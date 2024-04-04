// import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { hoursBackgroundImage, hoursScheduale } from "./data";

function Hours() {
  return (
    <Box
      id='hours'
      className='flexColumn'
      sx={{
        height: 1,
        width: 1,
        padding: { xxs: 2, md: 4 },
        position: "relative",
        overflow: "hidden",
        "&:before": {
          backgroundColor: "secondary.dark",
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          opacity: 0.95,
        },

        backgroundImage: `url(${hoursBackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          width: 1,
          height: 1,
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", md: ".75fr 1fr", lg: "1fr 1fr" },
          gridTemplateRows: { xxs: "auto 1fr", md: "1fr" },
          justifyItems: "center",
          zIndex: 1,
          gap: { xxs: 2, md: 3 },
        }}
      >
        <Box className='flexColumn' sx={{ width: 1, gap: 2, padding: 1 }}>
          <Typography
            variant='heading1'
            color={{ xxs: "#FAF0E6", md: "secondary.light" }}
            textAlign='center'
          >
            TMC Hours
          </Typography>
          <Typography
            variant='subHeading'
            color={{ xxs: "secondary.light", md: "#FAF0E6" }}
          >
            1 Broadway, New York, NY, USA
          </Typography>
        </Box>
        <Box
          className='flexColumn'
          sx={{ width: 1, maxWidth: 500, padding: 1 }}
        >
          {hoursScheduale.map(({ day, hours, color }, index) => (
            <Box
              className='flexRow'
              sx={{
                width: 1,
                justifyContent: "space-between",
                borderBottom: index !== hoursScheduale.length - 1 && 1.5,
                borderColor: "secondary.main",
                padding: 2,
              }}
            >
              {[day, hours].map(scheduale => (
                <Typography variant='label' color={color}>
                  {scheduale}
                </Typography>
              ))}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

export default Hours;
