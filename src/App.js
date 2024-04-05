import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { Paper, Box, Typography, Container } from "@mui/material";
import appTheme from "./Theme/ThemeContext";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Hours from "./Components/Hours/Hours";
import AboutUs from "./Components/AboutUs/AboutUs";

function App() {
  return (
    <Paper
      className='App'
      sx={{
        width: 1,
        height: 1,
        background: "transparent",
        position: "relative",
      }}
    >
      <ThemeProvider theme={appTheme}>
        <Navbar />
        <HeroSection />

        <Container
          className='flexColumn'
          sx={{
            gap: 4,
            width: 1,
            // minHeight: 400,
            padding: 3,
            marginTop: 4,
          }}
        >
          {/* <Typography variant='heading2' sx={{ width: 1, textAlign: "left" }}>
            Our Mission
          </Typography> */}
          <Typography
            className='flexRow'
            variant='label'
            textAlign='left'
            lineHeight={2.5}
          >
            At Thomas Mitchell Clothier, our mission is simple: to provide
            unparalleled quality and service to every customer. We believe in
            the power of well-crafted clothing to make a statement and boost
            confidence. Our values of integrity, creativity, and professionalism
            guide every stitch we make.
          </Typography>
        </Container>

        <Services />
        <Hours />
        <AboutUs />
      </ThemeProvider>
    </Paper>
  );
}

export default App;
