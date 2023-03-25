import { Meta, Story } from "@storybook/react";

import LogoLink, { LogoLinkProps } from ".";

export default {
  title: "LogoLink",
  component: LogoLink,
  args: {
    text: "LogoLink",
    srcImage: "assets/images/logo-colored.png",
    link: "/",
  },
} as Meta;

export const ImageOnly: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImage: "",
};

ImageOnly.args = {
  text: "",
};
