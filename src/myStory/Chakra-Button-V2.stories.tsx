import { ComponentStory, ComponentMeta } from "@storybook/react";
import ChakraButtonV2 from "./Chakra-Button-V2";

export default {
  title: "Jim/ChakraButtonV2",
  component: ChakraButtonV2,
} as ComponentMeta<typeof ChakraButtonV2>;

const Template: ComponentStory<typeof ChakraButtonV2> = (args) => (
  <ChakraButtonV2 {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  colorScheme: "familyBlue",
  isCustomHeight: true,
};
