import { createTheme } from "@mui/material/styles";

import { palettes } from "./palettes.js";

import breakpoints, {
  xxs,
  xs,
  mobile,
  sm,
  md,
  lg,
  mobilePortrait,
  mobileLandscape,
} from "./mediaQueries";

export const fonts = { playfair: '"Playfair Display", serif' };

const appTheme = createTheme({
  // palette: palettes,

  breakpoints: breakpoints,

  components: {
    MuiPaper: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          overflow: "hidden",
          borderRadius: 0,
        },
      },
      variants: [],
    },
    MuiContainer: {
      styleOverrides: {
        // Name of the slot
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          width: "100%",
          overflow: "hidden",
        },
      },
      variants: [],
    },

    MuiTypography: {
      defaultProps: {
        variantMapping: {
          heading1: "h1",
          boldLabel: "h5",
          subLabel: "p",
          tinyLabel: "p",
        },
      },
    },
  },
});

appTheme.typography.heading1 = {
  fontFamily: fonts.playfair,
  textAlign: "left",
  fontWeight: 700,
  fontSize: "1.5rem",
  [md]: { fontSize: "90px" },
};
appTheme.typography.heading2 = {
  fontFamily: fonts.playfair,
  // textAlign: "left",
  fontWeight: 400,
  fontSize: "1.5rem",
  [md]: { fontSize: "40px" },
};
appTheme.typography.heading3 = {
  fontFamily: fonts.playfair,
  // textAlign: "left",
  fontWeight: 500,
  fontSize: "1.5rem",
  [md]: { fontSize: "30px" },
};
appTheme.typography.subHeading = {
  fontFamily: fonts.playfair,
  textAlign: "left",
  fontWeight: 500,
  fontSize: "1.5rem",
  [md]: { fontSize: "25px" },
};
appTheme.typography.p = {
  fontFamily: fonts.playfair,
  textAlign: "left",
  fontWeight: 300,
  lineHeight: 2,
  fontSize: "16px",
  [md]: { fontSize: "18px" },
};

export default appTheme;
