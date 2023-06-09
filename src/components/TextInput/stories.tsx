import { Story, Meta } from "@storybook/react";

import TextInput, { TextInputProps } from ".";

export default {
  title: "Form/TextInput",
  component: TextInput,
  parameters: {
    layout: "fullscreen",
    backgrounds: {
      default: "rubeus-white",
    },
  },
  argTypes: {
    as: {
      control: { type: "select" },
      options: ["input", "textarea"],
    },
  },
  args: {
    name: "inputname",
    label: "Input label",
  },
} as Meta;

export const Default: Story<TextInputProps> = (args) => (
  <form
    style={{ padding: 10, width: 400, margin: "0 auto" }}
    onSubmit={(values) => console.log(values)}
  >
    <TextInput {...args} />
  </form>
);

export const TextArea: Story<TextInputProps> = (args) => (
  <>
    <form
      style={{ padding: 10, width: 400, margin: "0 auto" }}
      onSubmit={(values) => console.log(values)}
    >
      <TextInput {...args} />
    </form>
  </>
);

TextArea.args = {
  as: "textarea",
};
