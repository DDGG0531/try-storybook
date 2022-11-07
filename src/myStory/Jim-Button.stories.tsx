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
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  hasBorder: true,
  isLarge: true,
  isRounded: true,
};
