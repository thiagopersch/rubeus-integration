import styled, { css } from "styled-components";

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    text-decoration: none;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.small};
    font-weight: ${theme.font.weight.bold};
    color: ${theme.colors.primaryColor};
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0.76rem;
      left: 50%;
      width: 0,
      height: 0.2rem;
      background-color: ${theme.colors.success};
      transition: ${theme.transition.fast};
    }

    &:hover::after {
      left: 25%;
      width: 50%;
    }
  `}
`;
