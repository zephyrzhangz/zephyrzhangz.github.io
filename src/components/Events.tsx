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
          2024
        </Text>
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
        <br></br>4 Jul -{" "}
        <a
          href="https://www.instagram.com/p/C8lON0QPil3"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security measure
        >
          Rat World 7 Launch Party
        </a>
        <br></br>15 Aug -{" "}
        <a
          href="https://www.instagram.com/p/C-eXiRszBfF/"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security measure
        >
          Yellow Lamp Poetry
        </a>
        <br></br>23 Aug -{" "}
        <a
          href="https://www.timeout.co.nz/upcoming-events/atp2024"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security measure
        >
          All Tomorrow's Poets
        </a>
        <br></br>1 Sep -{" "}
        <a
          href="https://theopenbook.co.nz/events/2024/9/1/starling-issue-18-auckland-launch-party"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security measure
        >
          Starling Issue 18 Launch
        </a>
        <br></br>9 Nov -{" "}
        <a
          href="https://www.verbwellington.nz/litcrawl-2024-events/sweet-mammalian"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security measure
        >
          Verb LitCrawl: Sweet Mammalian
        </a>
        <br></br>7 Dec -{" "}
        <a
          href="https://theopenbook.co.nz/events/2024-the-open-book-christmas-party-zal9c"
          target="_blank" // Open link in a new tab
          rel="noopener noreferrer" // Security measure
        >
          Open Book Christmas Party
        </a>
      </AccordionPanel>
    </AccordionItem>
  );
};
