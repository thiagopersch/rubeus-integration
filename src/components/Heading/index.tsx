import styled, { css, DefaultTheme } from "styled-components";

export type HeadingProps = {
  size?: "lg" | "md" | "sm";
  color?: keyof DefaultTheme["colors"];
  children: React.ReactNode;
};

const headingModifiers = {
  lg: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
  `,
  md: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  sm: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
  `,
};

const Heading = styled.h2<HeadingProps>`
  ${({ theme, size = "lg", color = "primaryColor" }) => css`
    color: ${theme.colors[color]};
    font-weight: ${theme.font.weight.bold};
    font-family: ${theme.font.primary};

    ${headingModifiers[size](theme)}
  `}
`;

export default Heading;
