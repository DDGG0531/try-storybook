import { ComponentStory, ComponentMeta } from "@storybook/react";
import TwitterLikeButton from "./Twitter-Like-Button";

export default {
  title: "Jim/TwitterLikeButton",
  component: TwitterLikeButton,
} as ComponentMeta<typeof TwitterLikeButton>;

const Template: ComponentStory<typeof TwitterLikeButton> = () => (
  <TwitterLikeButton />
);

export const Primary = Template.bind({});
