import { Meta, Story } from "@storybook/react";

import MenuLink, { MenuLinkProps } from ".";

export default {
  title: "MenuLink",
  component: MenuLink,
  args: {
    children: "MenuLink",
    link: "#",
  },
  argTypes: {
    children: { type: "string" },
    link: { type: "string" },
  },
} as Meta;

export const Default: Story<MenuLinkProps> = (args) => {
  return (
    <div style={{ display: "flex" }}>
      <MenuLink {...args} />
    </div>
  );
};
