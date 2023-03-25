import Link from "next/link";
import * as S from "./styles";

export type MenuLinkProps = {
  children: string;
  link: string;
  newTab: boolean;
};

const MenuLink = ({ children, link, newTab = false }: MenuLinkProps) => {
  const target = newTab ? "_blank" : "_self";
  return (
    <S.Container href={link} target={target}>
      {children}
    </S.Container>
  );
};

export default MenuLink;
