import { ComponentStory, ComponentMeta } from "@storybook/react";
import JimButton, { PrimaryProps, SecondaryProps } from "./Jim-Button";

export default {
  title: "Jim/Button",
  component: JimButton,
} as ComponentMeta<typeof JimButton>;

const Template: ComponentStory<typeof JimButton> = (args) => (
  <JimButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = PrimaryProps;

export const Secondary = Template.bind({});
Secondary.args = SecondaryProps;
