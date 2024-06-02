import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Link,
  // Other imports remain the same
} from "@chakra-ui/react";

import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  useColorModeValue,
  chakra,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";

export const Events = () => {
  const accentColor = "#F56565";
  return (
    <Accordion allowToggle>
      <AccordionItem borderColor="#F56565" borderTopWidth={0}>
        <h2>
          <AccordionButton borderColor="#F56565">
            <Box flex="1" textAlign="left">
              <b>Events</b>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <b>2024</b>
          <br />
          14 Feb -{" "}
          <a
            href="https://aucklandpride.org.nz/shows/ssbd-poetry-speakeasy/"
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Security measure
          >
            SSBD: Poetry Speakeasy
          </a>{" "}
          <br></br>
          15 Feb -{" "}
          <a
            href="https://basementtheatre.co.nz/whats-on/bad-apple-presents-the-showcase"
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Security measure
          >
            bad apple Showcase
          </a>
          <br></br>
          17 Feb -{" "}
          <a
            href="https://aucklandpride.org.nz/shows/ssbd-rage-on-the-page/"
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Security measure
          >
            SSBD: Rage on the Page
          </a>
          <br></br>5 May -{" "}
          <a
            href="https://www.aucklandartgallery.com/whats-on/event/on-being-chinese-the-poetry"
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Security measure
          >
            Auckland Art Gallery: On Being Chinese
          </a>
          <br></br>30 Jul to 3 Aug -{" "}
          <a
            href="https://basementtheatre.co.nz/whats-on/a-short-history-of-asian-new-zealand-theatre"
            target="_blank" // Open link in a new tab
            rel="noopener noreferrer" // Security measure
          >
            A Short History of Asian New Zealand Theatre
          </a>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};