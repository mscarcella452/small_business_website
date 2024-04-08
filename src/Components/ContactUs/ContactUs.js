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
              backgroundColor: "#FAF0E6",
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

const GoogleMapsEmbed = () => {
  const googleMapsUrl =
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6049.1515314074095!2d-74.011579!3d40.70534!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a13d9a40ab5%3A0x7b64c58a2544b7e1!2s1%20Broadway%2C%20New%20York%2C%20NY%2010004%2C%20USA!5e0!3m2!1sen!2sua!4v1712519451381!5m2!1sen!2sua";

  return (
    <Box
      sx={{
        width: 1,
        minHeight: "450px",
        height: 1,

        "& iframe": {
          width: 1,
          height: 1,
          border: "none",
        },
      }}
    >
      <iframe
        src={googleMapsUrl}
        title='Google Maps'
        allowFullScreen=''
        loading='lazy'
        referrerPolicy='no-referrer-when-downgrade'
      ></iframe>
    </Box>
  );
};
