import "../src/index.css";
import { ChakraProvider } from "@chakra-ui/react";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "global-red",
    values: [
      { name: "global-red", value: "rgb(254 202 202)" },
      { name: "global-green", value: "green" },
    ],
  },
};

// preview.js => preview.jsx 不然會噴錯
export const decorators = [
  (Story) => (
    <ChakraProvider>
      <Story />
    </ChakraProvider>
  ),
];
