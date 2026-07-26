import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

export const AupNewPoets = () => {
  const accentColor = "#F56565";
  return (
    <AccordionItem borderColor={accentColor}>
      <h2>
        <AccordionButton borderColor={accentColor}>
          <Box flex="1" textAlign="left">
            <b>AUP New Poets 12</b>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        Zephyr's first chapbook, <i>moonlight circuit</i>, was published in{" "}
        <i>AUP New Poets 12</i>.
      </AccordionPanel>
    </AccordionItem>
  );
};
