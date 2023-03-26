import * as S from "./styles";

export type TextComponentProps = {
  children: string;
};

export const TextComponent = ({ children }: TextComponentProps) => {
  return <S.Container>{children}</S.Container>;
};

export default TextComponent;
