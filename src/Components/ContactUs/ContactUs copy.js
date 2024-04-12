import React from "react";
import { Paper, Box, Typography, Container } from "@mui/material";
import { PageDiv } from "../../Helpers/HelperComponents";
import ContactForm from "./ContactForm/ContactForm";

const contactInfo = [
  { title: "Address", content: "1 Broadway, New York, NY, USA" },
  { title: "Phone", content: "+1 234 567 890" },
  { title: "Email", content: "TMC@gmail.com" },
];

function ContactUs() {
  return (
    <PageDiv>
      <Container
        className='flexColumn'
        sx={{
          display: "grid",
          gridTemplateColumns: { xxs: "1fr", md: "1fr 1fr" },
          gridTemplateRows: "auto",
          gap: 4,
          // border: 1,
        }}
      >
        <Box className='flexColumn' sx={{ gap: 4, width: 1, border: 0 }}>
          <Typography
            className='flexRow'
            variant='heading3'
            sx={{
              height: 75,
              width: 1,
              backgroundColor: "#B08D57",
              color: "#fff",
              // backgroundColor: "#FAF0E6",
            }}
          >
            Contact Us
          </Typography>
          <Box>
            <Typography className='flexRow' variant='p'>
              Appointment: n/a
            </Typography>
          </Box>
          <ContactForm />
        </Box>
        <Box className='flexColumn' sx={{ gap: 4, width: 1, border: 0 }}>
          <Typography variant='heading3'>Thomas Mitchell Clothiers</Typography>
          {contactInfo.map(contact => (
            <Box className='flexColumn' sx={{ gap: 1 }}>
              <Typography variant='label'>{contact.title}:</Typography>
              <Typography variant='p'>{contact.content}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </PageDiv>
  );
}

export default ContactUs;
