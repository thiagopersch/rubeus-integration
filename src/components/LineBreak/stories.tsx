import { Story, Meta } from "@storybook/react";
import Separator, { SeparatorProps } from ".";

export default {
  title: "Separator",
  component: Separator,
  args: {
    Separator,
  },
} as Meta;

export const Default: Story<SeparatorProps> = (args) => <Separator {...args} />;
