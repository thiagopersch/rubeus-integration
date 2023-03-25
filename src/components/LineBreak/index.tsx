import styled, { css, DefaultTheme } from "styled-components";

export type SeparatorProps = {
  color?: keyof DefaultTheme["colors"];
};

const Separator = styled.hr<SeparatorProps>`
  ${({ theme, color = "primaryColor" }) => css`
    border: 0;
    border-top: 1px solid ${theme.colors.lightGrey};
    border-radius: 10rem;
  `}
`;

export default Separator;
