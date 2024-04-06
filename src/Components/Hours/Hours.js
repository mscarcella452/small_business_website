// import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { hoursBackgroundImage, hoursScheduale } from "./data";
import { PageDiv } from "../../Helpers/HelperComponents";

function Hours() {
  return (
    <PageDiv
      id='hours'
      sx={{
        position: "relative",
        overflow: "hidden",
        "&:before": {
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          backgroundImage: `url(${hoursBackgroundImage})`,
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
          opacity: 0.95,
          zIndex: -1,
        },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          border: 1,
          width: 1,
          height: 1,
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", md: ".75fr 1fr", lg: "1fr 1fr" },
          gridTemplateRows: { xxs: "auto 1fr", md: "1fr" },
          justifyItems: "center",
          zIndex: 10,
          gap: { xxs: 2, md: 3 },
        }}
      >
        <Box className='flexColumn' sx={{ width: 1, gap: 2 }}>
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
        <Box className='flexColumn' sx={{ width: 1, maxWidth: 550 }}>
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
              <Typography variant='label' color={color}>
                {day}
              </Typography>
              <Box className='flexRow' gap={2}>
                <Typography
                  variant='label'
                  sx={{
                    fontSize: (index === 2 || index === 6) && { xxs: 14 },
                    color:
                      index === 2 || index === 6 ? "secondary.light" : color,
                  }}
                >
                  {hours}
                </Typography>
                {(index === 2 || index === 6) && (
                  <Button
                    sx={{
                      backgroundColor: "primary.main",
                      color: "#fff",
                      borderRadius: 1,
                      padding: 1,
                    }}
                  >
                    Book
                  </Button>
                )}
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </PageDiv>
  );
}

export default Hours;
