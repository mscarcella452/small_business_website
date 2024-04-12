import React from "react";
import { Paper, Box, Typography, Container, Divider } from "@mui/material";
import { PageDiv, CompanyInfo } from "../../Helpers/HelperComponents";

const links = [
  { title: "About Us", link: "#AboutUs" },
  { title: "Services", link: "#Services" },
  { title: "Hours", link: "#Hours" },
  { title: "Contact Us", link: "#Contact Us" },
];

function Footer() {
  return (
    <PageDiv>
      <Container maxWidth={false} className='flexColumn' sx={{ gap: 5 }}>
        <Box
          gap={5}
          sx={{
            width: 1,
            display: "grid",
            gridTemplateColumns: {
              xxs: "1fr",
              sm: "1fr 1fr",
              md: "1fr  1fr  1fr",
            },
            "& > :last-child": {
              gridColumn: { xxs: "span 1", sm: "span 2", md: "span 1" }, // Make the last child span 2 columns
            },
            gridTemplateRows: "auto",
            justifyItems: "center",
          }}
        >
          <CompanyInfo />
        </Box>
        <Divider sx={{ width: 1, maxWidth: "md", height: 2 }} />
        <Box
          className='flexRow'
          gap={{ xxs: 5, mobile: 1 }}
          sx={{
            justifyContent: "space-between",
            flexDirection: { xxs: "column", mobile: "row" },
            width: 1,
            maxWidth: "sm",
          }}
        >
          {links.map(link => (
            <Typography
              variant='label'
              sx={{ textTransform: "uppercase", padding: 1 }}
            >
              {link.title}
            </Typography>
          ))}
        </Box>
        <Box className='flexColumn' gap={2} sx={{ width: 1, maxWidth: "sm" }}>
          <Typography variant='heading3' textAlign='center' marginBottom={1}>
            TMC
          </Typography>
          <Typography variant='label' fontSize={{ xxs: 12 }}>
            Copyright 2023. All right reserved
          </Typography>
          <Typography variant='label' fontSize={{ xxs: 12 }}>
            Images from stock website
          </Typography>
        </Box>
      </Container>
    </PageDiv>
  );
}

export default Footer;
