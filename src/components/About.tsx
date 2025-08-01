import React from "react";
import {
  AccordionItem,
  Box,
  useColorModeValue,
  AccordionButton,
  AccordionPanel,
} from "@chakra-ui/react";
import { FaCamera } from "react-icons/fa";

export const About = () => {
  const textColor = useColorModeValue("black", "white");
  const CustomSpacer = ({ height }: { height: string }) => (
    <Box height={height} />
  );

  return (
    <AccordionItem borderTopWidth={0} p={0}>
      <h2>
        <AccordionButton
          borderColor="#F56565"
          p={0}
          textColor={textColor}
          _hover={{ bg: "transparent" }}
          _focus={{ boxShadow: "none" }}
        ></AccordionButton>
      </h2>
      <AccordionPanel p={0}>
        <b>Zephyr Zhang</b> is a writer and performer based in Tāmaki Makaurau.
        They are very sleepy and like watching animal TikToks.
        <CustomSpacer height="12px" />
        Zephyr has performed in the Auckland Theatre Company iteration of{" "}
        <i>
          <a
            href="https://www.atc.co.nz/whats-on/past-seasons/past-2022-season/scenes-from-a-yellow-peril"
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Security measure
          >
            Scenes from a Yellow Peril
          </a>
        </i>
        ,{" "}
        <i>
          <a
            href="https://nathanjoe.com/i-am-rachel-chu"
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Security measure
          >
            I Am Rachel Chu
          </a>
        </i>{" "}
        and <i>OTHER [chinese]</i>. Their poetry is published in places like{" "}
        <i>Cordite</i>, <i>Landfall</i>, <i>Starling</i>, <i>Symposia</i>, and{" "}
        <i>Ōrongohau | Best New Zealand Poems</i>
        .
        <CustomSpacer height="30px" />
      </AccordionPanel>
    </AccordionItem>
  );
};
