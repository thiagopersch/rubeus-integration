import * as S from "./styles";

import Heading from "../Heading";

export type LogoLinkProps = {
  text: string;
  srcImage: string;
  link: string;
};

const LogoLink = ({ text, srcImage = "", link }: LogoLinkProps) => {
  return (
    <Heading size="sm" uppercase>
      <S.Container href={link}>
        {!!srcImage && <img src={srcImage} alt={text} />}
        {!srcImage && text}
      </S.Container>
    </Heading>
  );
};

export default LogoLink;
