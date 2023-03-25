import P from "prop-types";
import * as S from "./styles";

export type SectionContainerProps = {
  children: string;
};

const SectionContainer = ({ children }: SectionContainerProps) => {
  return <S.Container>{children}</S.Container>;
};

export default SectionContainer;
