import { accordionAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    _hover: { color: "#F56565" },
    // change the backgroundColor of the container
  },
});

export const accordionTheme = defineMultiStyleConfig({ baseStyle });
