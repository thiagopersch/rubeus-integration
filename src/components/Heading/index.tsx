import { DefaultTheme } from "styled-components";

import * as S from "./styles";

export type HeadingProps = {
  size?: "huge" | "lg" | "md" | "sm";
  color?: keyof DefaultTheme["colors"];
  children: React.ReactNode;
  uppercase?: boolean;
};

const Heading = ({
  children,
  color,
  size = "lg",
  uppercase = false,
}: HeadingProps) => {
  return (
    <S.Heading color={color} size={size} uppercase={uppercase}>
      {children}
    </S.Heading>
  );
};

export default Heading;
