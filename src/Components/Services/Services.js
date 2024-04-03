import React from "react";
import { Box, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

function Services() {
  return (
    <Box
      className='flexColumn'
      sx={{
        height: 1,
        width: 1,
        padding: 4,
        gap: 4,
      }}
    >
      <Typography
        className='flexRow'
        variant='heading2'
        color='#333'
        sx={{ border: 1, height: 150 }}
      >
        Our Services
      </Typography>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          width: 1,
          height: 1,
          //   border: 1,
        }}
      >
        <Grid
          container
          columns={{ xxs: 1, lg: 2 }}
          sx={{ width: 1, border: 0, height: 1 }}
          //   gap={{ xxs: 4, md: 0 }}
          //   spacing={10}
        >
          {services.map((service, index) => (
            <Grid
              className='flexColumn'
              item
              xxs={1}
              sx={{
                gap: { xxs: 4, sm: 8 },
                // border: 1,
                padding: 4,
                justifyContent: "flex-start",

                position: "relative",
                display: { xxs: "flex", sm: "grid", lg: "flex" },
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr",
                // height: 1,
              }}
            >
              <Box
                sx={{
                  width: 1,
                  //   height: 1,
                  height: { xxs: 250, sm: 350 },
                  //   border: 1,
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "top center",
                  backgroundRepeat: "no-repeat",
                  borderRadius: "5px",
                  order: { xxs: -1, sm: index % 2 ? -1 : 1 },
                  //   zIndex: -1,
                }}
              />

              <Box className='flexColumn' gap={2}>
                <Typography
                  variant='heading3'
                  //   color='#fff'
                  textAlign='inherit'
                  sx={{ width: 1, border: 0 }}
                >
                  {service.title}
                </Typography>
                <Typography
                  variant='p'
                  //   color='#fff'
                  textAlign='left'
                  fontWeight='300'
                  sx={{ padding: 1 }}
                >
                  {service.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Services;

const dummyImage =
  "https://alterations-express.com/wp-content/uploads/2021/09/4.png";

const services = [
  {
    image:
      "https://static.thehoneycombers.com/wp-content/uploads/sites/2/2016/05/shutterstock_395053261-copy.jpg",
    title: "Custom Tailoring",
    description:
      "Experience the epitome of personal style! Our custom tailoring service crafts garments tailored precisely to your measurements and preferences, ensuring a perfect fit and personalized aesthetic for any occasion.",
  },
  {
    image:
      "https://alterations-express.com/wp-content/uploads/2021/09/5-2048x1152.png",
    title: "Alterations and Repairs",
    description:
      "Let us refine your wardrobe to perfection! Our expert tailors provide meticulous alterations and repairs, ensuring your clothing fits flawlessly and looks impeccable, no matter the occasion.",
  },
  {
    image:
      "https://highlandercleaners.com/wp-content/uploads/2023/03/AdobeStock_217594882-1080x675.jpeg",
    title: "Specialized Fittings",
    description:
      "Elevate your special events with our specialized fittings! Whether it's bridal wear or formal attire, our fittings ensure every garment fits flawlessly, making your moments truly memorable.",
  },
  {
    image: "https://media.timeout.com/images/103663124/image.jpg",
    title: "Consultation and Styling",
    description:
      "Discover your unique look with our personalized consultation and styling services! We guide you in selecting fabrics and designs that complement your individuality, helping you achieve your desired style with confidence.",
  },
  {
    image:
      "http://static5.businessinsider.com/image/54ef5ad3ecad04780b86bcc7-1200-924/tailor-garment-worker-3.jpg",
    title: "Garment Remodeling and Upcycling",
    description:
      "Transform your old garments into new treasures! Our garment remodeling and upcycling service breathes new life into outdated clothing, offering you a sustainable way to refresh your wardrobe and express your style.",
  },
  {
    image: dummyImage,
    title: "Uniform and Corporate Apparel Services",
    description:
      "Dress to impress with our tailored uniform and corporate apparel services! From custom uniforms to branded merchandise, we ensure your team looks polished and professional, reflecting your organization's identity with pride.",
  },
];
