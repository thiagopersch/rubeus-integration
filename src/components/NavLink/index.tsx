import * as S from "./styles";

import MenuLink, { MenuLinkProps } from "../MenuLink";

export type NavLinksProps = {
  links: Array<MenuLinkProps>;
};

const NavLinks = ({ links = [] }: NavLinksProps) => {
  return (
    <S.Container>
      {links.map((link) => (
        <MenuLink key={link.link} {...link} />
      ))}
    </S.Container>
  );
};

export default NavLinks;
