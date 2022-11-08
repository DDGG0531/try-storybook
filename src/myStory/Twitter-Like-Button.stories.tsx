import { ComponentStory, ComponentMeta } from "@storybook/react";
import TwitterLikeButton from "./Twitter-Like-Button";

export default {
  title: "Jim/TwitterLikeButton",
  component: TwitterLikeButton,
} as ComponentMeta<typeof TwitterLikeButton>;

const Template: ComponentStory<typeof TwitterLikeButton> = (args) => (
  <TwitterLikeButton {...args} />
);

export const Animate = Template.bind({});
Animate.args = {
  canAnimate: true,
};

export const NoAnimate = Template.bind({});
NoAnimate.args = {
  canAnimate: false,
};
