import styled, { css, DefaultTheme } from "styled-components";
import { ArrowRight } from "@styled-icons/feather";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    height: 20rem;
    width: 30rem;
    padding: ${theme.spacings.xxsmall};
    background: ${theme.colors.white};
    box-shadow: ${theme.shadow.hoverGreen};
    border-radius: 0.3rem;
    overflow: hidden;
  `}
`;

export type ContentProps = {
  hasIcon: boolean;
  iconAlign: "right" | "center" | "left";
};

const contentModifiers = {
  withIcon: (theme: DefaultTheme, align: ContentProps["iconAlign"]) => css`
    > svg {
      width: 4rem;
      stroke-width: 2;
      color: ${theme.colors.primaryColor};

      align-self: ${align === "left"
        ? "flex-start"
        : align === "center"
        ? "center"
        : "flex-end"};
    }
  `,
};

export const Content = styled.div<ContentProps>`
  ${({ theme, hasIcon, iconAlign }) => css`
    display: flex;
    flex-direction: column;
    padding: 0 ${theme.spacings.xxsmall};
    border-bottom: 0.1rem solid ${theme.colors.lightGrey};
    overflow: hidden;

    ${!!hasIcon && contentModifiers.withIcon(theme, iconAlign)};
  `}
`;

export const Text = styled.h1`
  ${({ theme }) => css`
    font-family: ${theme.font.secondary};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.primaryColor};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-family: ${theme.font.primary};
    font-weight: ${theme.font.sizes.medium};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.primaryGrey};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`;

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    cursor: pointer;
    align-items: center;
    text-decoration: none;
    flex: 1;
    font-family: ${theme.font.primary};
    font-style: ${theme.font.style.normal};
    font-weight: ${theme.font.weight.normal};
    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.primaryColor};
  `}
`;

export const ArrowIcon = styled(ArrowRight)`
  ${({ theme }) => css`
    stroke-width: 2;
    width: ${theme.spacings.xsmall};
  `}
`;
