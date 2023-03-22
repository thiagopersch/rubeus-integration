export default {
  colors: {
    darkPrimaryColor: "#004747",
    primaryColor: "#0DA6A6",
    lightPrimaryColor: "#3DD5D6",
    white: "#FFFFFF",
    lightGrey: "#808080",
    primaryGrey: "#4D4D4D",
    darkGrey: "#1A1A1A",
    lightRed: "#F0758D",
    primaryRed: "#FF0031",
    darkRed: "#99001D",
    success: "#2ED47A",
    alert: "#FFB946",
    danger: "#F7685B",
    darkPurple: "#492F64",
    blue: "#1155CC",
    mainBg: "#F9F9F9",
  },
  shadow: {
    default:
      "-1px -1px 2px rgba(0, 0, 0, 0.2), 1px 1px 2px rgba(0, 0, 0, 0.2);",
    text: "0px 1px 2px rgba(0, 0, 0, 0.2), 0px 1px 1px -2px rgba(0, 0, 0, 0.2), 0px 1px 5px rgba(0, 0, 0, 0.2);",
    hover:
      "-2px -2px 5px rgba(0, 0, 0, 0.25), 2px 2px 5px rgba(0, 0, 0, 0.25);",
    hoverGreen:
      "1px 1px 5px rgba(13, 166, 166, 0.25), -1px -1px 5px rgba(13, 166, 166, 0.25);",
  },
  font: {
    primary: "'Poppins', sans-serif",
    secondary: "'Inter', sans-serif",

    weight: {
      light: 300,
      normal: 400,
      medium: 500,
      bold: 600,
      mediumBold: 700,
      black: 800,
      extraBlack: 900,
    },
    sizes: {
      xsmall: "8rem",
      small: "1.6rem",
      medium: "2.4rem",
      large: "3.2rem",
      xlarge: "4.0rem",
      xxlarge: "4.8rem",
      huge: "5.6rem",
      xhuge: "6.4rem",
    },
    style: {
      normal: "normal",
      italic: "italic",
      oblique: "oblique",
    },
  },
  media: {
    lteMedium: "(max-width: 768px)",
  },
  spacings: {
    xxsmall: "0.8rem",
    xsmall: "1.6rem",
    small: "2.4rem",
    medium: "3.2rem",
    large: "4.0rem",
    xlarge: "4.8rem",
    xxlarge: "5.6rem",
    huge: "6.2rem",
    xhuge: "6.4rem",
  },
  transition: {
    fast: "all 0.3s ease-in-out;",
    normal: "all 1s ease-in-out;",
    slow: "all 2s ease-in-out;",
  },
} as const;
