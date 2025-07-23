import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";

import { Box } from "@chakra-ui/react";

export const Events = () => {
  const accentColor = "#F56565";
  return (
    <AccordionItem borderColor={accentColor} borderTopWidth={0}>
      <h2>
        <AccordionButton borderColor={accentColor}>
          <Box flex="1" textAlign="left">
            <b>Events</b>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Text fontWeight="bold" mb={1}>
          2025
        </Text>
        20 Feb -{" "}
        <a
          href="https://events.humanitix.com/yellow-lamp-vol-pride"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security measure
        >
          Yellow Lamp Vol. Pride
        </a>{" "}
        <br></br>
        12 Apr -{" "}
        <a
          href="https://www.otago.ac.nz/news/events/auckland-book-launch-mad-diva-by-cadence-chung"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security measure
        >
          Cadence Chung - Mad Diva Launch
        </a>
        <br></br>
        11 Jul -{" "}
        <a
          href="https://aucklanduniversitypress.co.nz/news/book-launch-dear-alter/"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security measure
        >
          Jiaqiao Liu - Dear Alter Launch
        </a>
        <br></br>14 Aug -{" "}
        <a
          href="https://aucklanduniversitypress.co.nz/news/book-launch-no-good/"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security measure
        >
          Sophie van Waardenberg - No Good Launch
        </a>
        <br></br>18 Aug -{" "}
        <a
          href="https://www.tepapa.govt.nz/visit/events/writers-on-mondays-orongohau-best-new-zealand-poems-2024"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security measure
        >
          Writers on Mondays – Ōrongohau: BNZP 2024
        </a>
        <br></br>29 Aug -{" "}
        <a
          href="https://www.instagram.com/yellowlamppoetry/"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security measure
        >
          Yellow Lamp Poetry Vol. Library
        </a>
      </AccordionPanel>
    </AccordionItem>
  );
};
