import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { Paper, Box, Typography, Container } from "@mui/material";
import appTheme from "./Theme/ThemeContext";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Hours from "./Components/Hours/Hours";
import AboutUs from "./Components/AboutUs/AboutUs";
import MissionStatement from "./Components/MissionStatement/MissionStatement";
import CustomerReviews from "./Components/CustomerReviews/CustomerReviews";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <Paper
        className='flexColumn'
        sx={{
          width: 1,
          height: 1,
          background: "transparent",
          position: "relative",
          gap: { xxs: 2, sm: 4, md: 6 },
        }}
      >
        <Navbar />
        <HeroSection />

        <MissionStatement />
        <Services />
        <Hours />
        <AboutUs />
        <CustomerReviews />
      </Paper>
    </ThemeProvider>
  );
}

export default App;
