import { createTheme } from "@mui/material/styles";

import { palette } from "./palettes.js";

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
  palette: palette,

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
          // overflow: "hidden",
        },
      },
      variants: [],
    },
    MuiPageDiv: {
      styleOverrides: {
        // Name of the slot
        root: {
          backgroundColor: "yellow",
          padding: 5,
        },
      },
      variants: [],
    },

    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: fonts.playfair,
          fontWeight: 700,
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
  fontSize: "50px",
  [md]: { fontSize: "90px" },
};
appTheme.typography.heading2 = {
  fontFamily: fonts.playfair,
  color: "#2F2E41",
  fontWeight: 400,
  fontSize: "30px",
  [md]: { fontSize: "50px" },
};
appTheme.typography.heading3 = {
  fontFamily: fonts.playfair,
  color: "#2F2E41",
  fontWeight: 500,
  fontSize: "1.5rem",
  [md]: { fontSize: "30px" },
};
appTheme.typography.subHeading = {
  fontFamily: fonts.playfair,
  textAlign: "left",
  fontWeight: 500,
  fontSize: "20px",
  [md]: { fontSize: "25px" },
};
appTheme.typography.p = {
  fontFamily: fonts.playfair,
  textAlign: "left",
  fontWeight: 300,
  lineHeight: 2,
  color: "#2F2E41",
  fontSize: "16px",
  [md]: { fontSize: "18px" },
};
appTheme.typography.label = {
  fontFamily: fonts.playfair,
  textAlign: "left",
  fontWeight: 500,
  color: "#2F2E41",
  fontSize: "16px",
  [md]: { fontSize: "20px" },
};

export default appTheme;
