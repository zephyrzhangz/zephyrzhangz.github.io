import * as React from "react";
import {
  ChakraProvider,
  // theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import theme from "./theme";
import Content from "./Content";
import Footer from "./Footer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher justifySelf="flex-end" />
    <Content />
  </ChakraProvider>
);
