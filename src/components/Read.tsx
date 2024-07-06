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
  Box,
} from "@chakra-ui/react";

export const Read = () => {
  const accentColor = "#F56565";
  return (
    <Box pt="35px">
      <Accordion allowToggle>
        <AccordionItem borderColor="#F56565">
          <h2>
            <AccordionButton borderColor="#F56565">
              <Box flex="1" textAlign="left">
                <b>Read</b>&nbsp;&nbsp;↳ Online | ▤ Print
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <a
              href="https://www.symposiamagazine.com/issue02/zephyr-zhang"
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security measure
            >
              ↳ Symposia
            </a>
            <br />
            <a
              href="http://cordite.org.au/poetry/treat/cucumis-sativus-parvus/"
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security measure
            >
              ↳ Cordite
            </a>
            <br />
            <a
              href="https://www.starlingmag.com/issue-14/zephyr-zhang"
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security measure
            >
              ↳ Starling
            </a>
            <br />
            <a
              href="https://thespinoff.co.nz/books/08-03-2024/the-friday-poem-you-ask-me-if-i-still-love-you-by-zephyr-zhang"
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security measure
            >
              ↳ The Spinoff
            </a>
            <br />
            <a
              href="https://www.sweetmammalian.com/issue-nine/zephyr-zhang"
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security measure
            >
              ↳ Sweet Mammalian
            </a>
            <br />
            <a
              href="https://badapple.gay/2023/11/22/i-used-to-shop-at-newmarket-mall-until-i-realised-it-was-a-spaceship-run-by-evil-aliens-and-was-subsequently-abducted/"
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security measure
            >
              ↳ bad apple
            </a>
            <br />
            <a
              href="https://www.ratworldmag.com/shop/p/rat-world-issue-seven"
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security measure
            >
              ▤ Rat World
            </a>
            <br />
            <a
              href="https://www.otago.ac.nz/press/books/landfall-247-spring-2024"
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security measure
            >
              ▤ Landfall
            </a>
            <br />
            <a
              href="https://aucklanduniversitypress.co.nz/rapture/"
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security measure
            >
              ▤ Rapture: An Anthology of Performance Poetry from Aotearoa New
              Zealand
            </a>
            <br />
            <a
              href="https://www.mayhemjournal.co.nz/shop/product/565007/mayhem-2021--issue-9/"
              target="_blank" // Open link in a new tab
              rel="noopener noreferrer" // Security measure
            >
              ▤ Mayhem
            </a>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
