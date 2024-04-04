import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import { services } from "./data";

function Services() {
  return (
    <Box
      className='flexColumn'
      sx={{
        height: 1,
        width: 1,
        padding: { xxs: "2rem 0", sm: 4 },
        gap: 4,
      }}
    >
      <Typography
        className='flexRow'
        variant='heading2'
        sx={{ border: 0, height: 150 }}
      >
        Our Services
      </Typography>
      <Container disableGutters maxWidth={false} sx={{ width: 1, height: 1 }}>
        <Grid
          container
          columns={{ xxs: 1, lg: 2 }}
          sx={{ width: 1, border: 0, height: 1 }}
          gap={{ xxs: 2, sm: 8, lg: 0 }}
        >
          {services.map((service, index) => (
            <Grid
              container
              xxs={1}
              columns={{ xxs: 1, sm: 2, lg: 1 }}
              gap={{ xxs: 2, sm: 0 }}
            >
              <Grid xs={1} padding={{ xxs: 4, lg: 6 }}>
                <Box className='flexColumn' width={1} height={1} gap={2}>
                  <Typography variant='heading3' textAlign='left' width={1}>
                    {service.title}
                  </Typography>
                  <Typography variant='p'>{service.description}</Typography>
                </Box>
              </Grid>
              <Grid
                xxs={1}
                sx={{
                  padding: { xxs: 0, sm: 4, lg: 6 },
                  height: { xxs: 300, sm: 1, lg: "auto" },
                  minHeight: { xxs: 300, md: 350, lg: 450 },
                  order: { xxs: -1, sm: index % 2 ? -1 : 1 },
                }}
              >
                <Box
                  sx={{
                    width: 1,
                    height: 1,
                    backgroundImage: `url(${service.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat",
                    borderRadius: { xxs: 0, sm: "5px" },
                  }}
                />
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;
