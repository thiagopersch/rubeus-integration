import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 100vw;
    margin: 0 auto;
    padding: ${theme.spacings.large};
    width: 100%;
  `}
`;
