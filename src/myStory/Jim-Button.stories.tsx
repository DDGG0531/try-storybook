import { ComponentStory, ComponentMeta } from "@storybook/react";
import JimButton from "./Jim-Button";

export default {
  title: "Jim/Button",
  component: JimButton,
} as ComponentMeta<typeof JimButton>;

const Template: ComponentStory<typeof JimButton> = (args) => (
  <JimButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  hasShadow: true,
  isLarge: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  hasShadow: false,
  isLarge: false,
};
