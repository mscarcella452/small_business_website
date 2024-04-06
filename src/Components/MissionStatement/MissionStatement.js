// import React from 'react'
import { PageDiv } from "../../Helpers/HelperComponents";
import { Typography, Container } from "@mui/material";

function MissionStatement() {
  return (
    <PageDiv>
      {/* <Typography variant='heading2' sx={{ width: 1, textAlign: "left" }}>
        Hello there!
      </Typography> */}
      <Container maxWidth={false}>
        <Typography
          className='flexRow'
          variant='subHeading'
          textAlign='left'
          lineHeight={2.5}
          fontWeight={300}
        >
          At Thomas Mitchell Clothier, our mission is simple: to provide
          unparalleled quality and service to every customer. We believe in the
          power of well-crafted clothing to make a statement and boost
          confidence. Our values of integrity, creativity, and professionalism
          guide every stitch we make.
        </Typography>
      </Container>
    </PageDiv>
  );
}

export default MissionStatement;
