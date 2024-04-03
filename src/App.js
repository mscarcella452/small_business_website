import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import { Paper } from "@mui/material";
import appTheme from "./Theme/ThemeContext";
import HeroSection from "./Components/HeroSection/HeroSection";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";

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
        <Services />
      </ThemeProvider>
    </Paper>
  );
}

export default App;
