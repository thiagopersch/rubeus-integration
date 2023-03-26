import * as S from "./styles";

export type SectionContainerProps = {
  children?: string | React.ReactNode;
};

const SectionContainer = ({ children }: SectionContainerProps) => {
  return <S.Container>{children}</S.Container>;
};

export default SectionContainer;
