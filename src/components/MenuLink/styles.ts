import styled, { css } from "styled-components";
export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: block;
    padding: ${theme.spacings.small};
  `}
`;

export const Container = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    font-weight: ${theme.font.weight.bold};
    position: relative;
    text-decoration: none;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 0.2rem;
      border-radius: 10rem;
      background-color: ${theme.colors.darkPrimaryColor};
      bottom: 0;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform 0.3s ease-in-out;
    }

    &:hover::before {
      transform-origin: left;
      transform: scaleX(1);
    }
  `}
`;
