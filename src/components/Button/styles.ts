import styled, { css, DefaultTheme } from "styled-components";
import { darken } from "polished";

import { ButtonProps } from "./";

export type WrapperProps = {
  hasIcon: boolean;
} & Pick<ButtonProps, "size" | "fullWidth" | "styleType">;

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.bold};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.large};
    padding: ${theme.spacings.xxsmall};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 2rem;
      stroke-width: 2;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,
  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
  normal: () => css``,
  rounded: () => css`
    border-radius: 10rem;
  `,
  outlined: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    box-sizing: border-box;
    border: 0.2rem solid ${theme.colors.primaryColor};
    color: ${theme.colors.primaryColor};
    font-weight: ${theme.font.weight.bold};
    border-radius: 10rem;

    &:hover {
      background: ${darken(0.05, theme.colors.white)};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    box-shadow: ${theme.shadow.default};
    color: ${theme.colors.primaryColor};
    font-weight: ${theme.font.weight.bold};
    transition: ${theme.transition.fast};
    border-radius: 10rem;

    &:hover {
      background: ${darken(0.01, theme.colors.white)};
      box-shadow: ${theme.shadow.hover};
    }
  `,
  circle: (theme: DefaultTheme) => css`
    background: ${theme.colors.white};
    height: 10rem;
    width: 5rem;
    border: 0.5px solid ${theme.colors.primaryColor};
    border-radius: 100rem;
    padding: 10px;

    &:hover {
      background: ${darken(0.01, theme.colors.white)};
      box-shadow: ${theme.shadow.hover};
    }

    > svg {
      color: ${theme.colors.primaryColor};
    }
  `,
};

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, disabled, styleType }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
    border: 0;
    outline: none;
    border-radius: 0.6rem;
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;
    cursor: pointer;
    font-family: ${theme.font.primary};
    font-weight: ${theme.font.weight.bold};
    transition: ${theme.transition.fast};
    width: 100%;
    box-shadow: ${theme.shadow.default};

    &:hover {
      background: ${darken(0.05, theme.colors.primaryColor)};
      box-shadow: ${theme.shadow.hover};
    }

    ${!!styleType && wrapperModifiers[styleType](theme)}
    ${!!fullWidth && wrapperModifiers.fullWidth()}
    ${!!size && wrapperModifiers[size](theme)}
      ${!!hasIcon && wrapperModifiers.withIcon(theme)}
      ${disabled && wrapperModifiers.disabled()};
  `}
`;
