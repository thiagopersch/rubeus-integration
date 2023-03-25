import { Story, Meta } from "@storybook/react";

import Navbar from ".";

export default {
  title: "Navbar",
  component: Navbar,
  args: {
    children: "Navbar",
  },
  argTypes: {
    children: { type: "string" },
  },
} as Meta;

export const Default: Story = (args) => <Navbar {...args} />;

Default.args = {
  children: "navbar",
};
