import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { Paper, Box } from "@mui/material";
import appTheme from "./Theme/ThemeContext";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Hours from "./Components/Hours/Hours";
import AboutUs from "./Components/AboutUs/AboutUs";
import MissionStatement from "./Components/MissionStatement/MissionStatement";
import CustomerReviews from "./Components/CustomerReviews/CustomerReviews";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Gallery from "./Components/Gallery/Gallery";
import Features from "./Components/AboutUs/Features";
import GoogleMap from "./Components/GoogleMap/GoogleMap";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Paper
        sx={{
          width: 1,
          height: 1,
          background: "transparent",
          position: "relative",
        }}
      >
        <Navbar />
        <Box
          className='flexColumn'
          sx={{ width: 1, gap: { xxs: 2, sm: 4, md: 6 } }}
        >
          <HeroSection />
          <Features />
          <Features contentOrder={1} />
          {/* <MissionStatement /> */}
          {/* <Services /> */}
          <Hours />
          <AboutUs />
          <CustomerReviews />
          <Gallery />
          <Footer />
        </Box>
        {/* <ContactUs /> */}
      </Paper>
    </ThemeProvider>
  );
}

export default App;
