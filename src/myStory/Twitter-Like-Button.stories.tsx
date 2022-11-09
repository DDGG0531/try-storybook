import { ComponentStory, ComponentMeta } from "@storybook/react";

import TwitterLikeButton from "./Twitter-Like-Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Jim/TwitterLikeButton",
  component: TwitterLikeButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof TwitterLikeButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TwitterLikeButton> = (args) => (
  <TwitterLikeButton {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  canAnimate: true,
};
