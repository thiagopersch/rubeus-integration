import { ThemeProvider } from "styled-components";

import theme from "../src/styles/theme";
import GlobalStyles from "../src/styles/global";

export const parameters = {
  backgrounds: {
    default: "rubeus-light",
    values: [
      {
        name: "rubeus-light",
        value: theme.colors.mainBg,
      },
      {
        name: "rubeus-white",
        value: theme.colors.white,
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
