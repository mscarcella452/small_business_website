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

const companyInfo = [
  {
    title: "Location:",
    info: ["8721 M Central Avenue, Los Angeles, CA 90036"],
  },
  {
    title: "Contact:",
    info: ["hello@yourdomain.com", "+12 9 8765 4321"],
  },
  {
    title: "Hours:",
    info: [
      "Sun – Mon: *by appt. only",
      "Tuesday: Closed",
      "Wed – Sat: 9:00 AM - 6:00 PM",
    ],
  },
];

const wallPaper = "https://wallpaperaccess.com/full/4870403.jpg";

function ContactUs() {
  return (
    <Box className='flexColumn' gap={5}>
      <Box
        className='flexColumn'
        gap={1.5}
        sx={{
          border: 0,
          height: 400,
          position: "relative",
          "&:before": {
            content: "''",
            position: "absolute",
            top: 0,
            width: "100vw",
            // left: 0,
            // right: 0,
            bottom: 0,
            zIndex: -2,
            background: `url(${wallPaper}) top center / cover no-repeat`,
          },
          "&:after": {
            content: "''",
            position: "absolute",
            top: 0,
            width: "100vw",
            bottom: 0,
            zIndex: -1,
            backgroundColor: "#000",
            opacity: 0.5,
          },
        }}
      >
        <Typography
          variant='heading2'
          fontWeight={700}
          fontSize={{ xxs: 73 }}
          color='#fff'
        >
          Let's Talk Tailoring!
        </Typography>
        <Typography variant='label' color='#fff'>
          Got Questions? Please, don't hesitate to get in touch with us
        </Typography>
      </Box>
      <PageDiv>
        <Container
          maxWidth={false}
          sx={{
            border: 0,
            gap: 5,
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gridTemplateRows: "1fr",
            justifyItems: "center",
            width: 1,
          }}
        >
          <Box
            className='flexColumn'
            gap={5}
            maxWidth={"mobile"}
            sx={{ border: 0 }}
          >
            <CompanyInfo alignItems='flex-start' />
          </Box>
          <Box
            classNamae='flexColumn'
            gap={1}
            sx={{
              width: 1,
              height: 1,
              maxWidth: "sm",
              border: 1,
            }}
          >
            <Typography variant='subHeading' fontWeight={700}>
              Send Message:
            </Typography>
            <ContactForm />
          </Box>
        </Container>
      </PageDiv>

      <GoogleMapsEmbed />
    </Box>
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
        height: 400,

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

function CompanyInfo({ alignItems = "center" }) {
  return (
    <>
      {companyInfo.map(({ title, info }) => (
        <Box
          className='flexColumn'
          gap={1}
          sx={{ alignItems: alignItems, border: 0, width: 1 }}
        >
          <Typography variant='subHeading' fontWeight={700}>
            {title}
          </Typography>
          {info.map(information => (
            <Typography variant='p'>{information}</Typography>
          ))}
        </Box>
      ))}
    </>
  );
}
