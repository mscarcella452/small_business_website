import React from "react";
import { Paper, Box, Typography, Container, Button } from "@mui/material";
import { PageDiv } from "../../Helpers/HelperComponents";
import ContactForm from "./ContactForm/ContactForm";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const contactInfo = [
  {
    icon: <PlaceIcon sx={{ height: 1, width: 1 }} />,
    content: "1 Broadway, New York, NY, USA",
  },
  {
    icon: <PhoneIcon sx={{ height: 1, width: 1 }} />,
    content: "+1 234 567 890",
  },
  {
    icon: <EmailIcon sx={{ height: 1, width: 1 }} />,
    content: "TMC@gmail.com",
  },
];

// const contactInfo = [
//   "1 Broadway, New York, NY, USA",
//   "+1 234 567 890",
//   "TMC@gmail.com",
// ];
// FAF0E6;
const hoursScheduale = [
  // { day: "Tues", hours: "9am - 6pm", color: "secondary.dark" },
  { day: "Sun - Mon", hours: "*Appt. only", color: "secondary.dark" },
  // { day: "Tue", hours: "Closed", color: "secondary.light" },
  { day: "Wed - Sat", hours: "9AM - 6PM", color: "secondary.dark" },
  // { day: "Wed", hours: "*Appt. only", color: "secondary.light" },
  // { day: "Thu", hours: "9am - 6pm", color: "secondary.dark" },
  // { day: "Fri", hours: "9am - 6pm", color: "secondary.dark" },
  // { day: "Sat", hours: "9am - 6pm", color: "secondary.dark" },
  // { day: "Sun", hours: "*Appt. only", color: "secondary.light" },
];

function ContactUs() {
  return (
    <PageDiv
      sx={{
        backgroundColor: "secondary.dark",
        position: "relative",
      }}
    >
      <Box
        sx={{
          width: 1,
          height: { xxs: 350, sm: 400 },
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 0,
        }}
      >
        <GoogleMapsEmbed />
      </Box>
      <Container
        sx={{
          width: 1,

          backgroundColor: "#fff",
          zIndex: 2,
          position: "relative",
          marginTop: { xxs: "350px", sm: "200px" },
          display: "grid",
          gridTemplateRows: "auto",
          gridTemplateColumns: { xxs: "1fr", md: "1fr 1fr" },
          // "& .heading": {
          //   gridColumn: "span 2",
          // },

          justifyItems: "center",
          padding: { xxs: 2, sm: 4, md: 6 },
          gap: 4,
        }}
      >
        {/* <Typography
          className='flexRow heading'
          variant='heading3'
          sx={{
            height: 75,
            width: 1,
            backgroundColor: "#B08D57",
            color: "#fff",
            // gridColumn: "span 2",
            // backgroundColor: "#FAF0E6",
          }}
        >
          Contact Us
        </Typography> */}

        <Box
          className='flexColumn'
          gap={4}
          sx={{
            // display: "grid",
            // gridTemplateRows: "auto",
            alignItems: "flex-start",
            // border: 1,
            height: 1,
            // width: 1,
            order: 1,
          }}
        >
          <Typography
            variant='heading3'
            fontWeight={700}
            sx={{ width: 1, textAlign: "left" }}
          >
            Thomas Mitchell Clothier
          </Typography>
          <Hours />
          <Location />
        </Box>
        <Box
          className='flexColumn'
          sx={{ gap: 2, width: 1, border: 0, height: 1 }}
        >
          {/* <Box
            className='flexRow'
            gap={2}
            sx={{ width: 1, border: 0, justifyContent: "flex-start" }}
          >
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
            <Typography className='flexRow' variant='p'>
              Appointment: n/a
            </Typography>
          </Box> */}
          <ContactForm />
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
        // minHeight: "450px",
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
      />
    </Box>
  );
};

function Location() {
  return (
    <Box className='flexColumn' gap={3} sx={{ border: 0 }}>
      {contactInfo.map(info => (
        <Box className='flexRow' gap={2} sx={{ width: 1 }}>
          <Box
            className='flexRow'
            sx={{
              color: "#fff",
              borderRadius: "50%",
              padding: "5px",
              height: 30,
              aspectRatio: 1,
              backgroundColor: "secondary.dark",
            }}
          >
            {info.icon}
          </Box>
          <Typography variant='label' color='secondary.light' sx={{ width: 1 }}>
            {info.content}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}

function Hours() {
  return (
    <Box className='flexColumn' gap={0} sx={{ border: 0 }}>
      {hoursScheduale.map(({ day, hours, color }, index) => (
        <Box
          className='flexRow'
          gap={3}
          sx={{
            width: 1,

            justifyContent: "space-between",
          }}
        >
          <Typography variant='p' color={color}>
            {day}
          </Typography>

          <Typography variant='p' sx={{ color: color }}>
            {hours}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
