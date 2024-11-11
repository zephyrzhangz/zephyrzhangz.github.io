import { extendTheme, textDecoration } from "@chakra-ui/react";
import { accordionTheme } from "./themes/accordionTheme";
import { stepperTheme } from "./themes/stepperTheme";

const theme = extendTheme({
  components: {
    Accordion: accordionTheme,
    Stepper: stepperTheme,
    Link: {
      baseStyle: (props: { colorMode: string; }) => ({
        target: "_blank", // Open all links in a new tab
        rel: "noopener noreferrer", // Ensure security when opening new tabs
        color: "#F56565", // Same color as the global `a` styles
        textDecoration: "none", // Removes underline
        _hover: {
          color: props.colorMode === "dark" ? "gray.200" : "gray.800", // Revert to default text color on hover
          textDecoration: "none"
        },
      }),
    },
  },
  styles: {
    global: (props: { colorMode: string; }) => ({
      a: {
        target: "_blank", // Open all links in a new tab
        rel: "noopener noreferrer", // Ensure security when opening new tabs
        color: "#F56565", // All links will be this color
        textDecoration: "none", // Optional: removes underline from links
        _hover: {
          color: props.colorMode === "dark" ? "gray.200" : "gray.800", // Revert to default text color on hover
          textDecoration: "none"

        },
      },
    }),
  },
  colors: {
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    gray: {
      50: "#f7fafc",
      900: "#171923",
    },
    zRed: {
      50: "#ffe5e5",
      500: "#F56565",
      900: "#7d1414",
    },
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
});

export default theme;
