import * as React from "react";
import {
  ChakraProvider,
  // theme,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "../ColorModeSwitcher";
import theme from "../theme";
import Content from "./Content";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher
      position={{ base: "static", md: "fixed" }}
      top={2}
      left={2}
      zIndex={2}
    />
    <Content />
  </ChakraProvider>
);
