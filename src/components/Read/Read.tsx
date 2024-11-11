import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import { JournalLink } from "./JournalLink";
import { DropdownJournal } from "./DropdownJournal";

export const Read = () => {
  const accentColor = "#F56565";

  // Updated type: use `entryType` to distinguish single/dropdown, and `type` for online/print
  const journals: (
    | {
        entryType: "single";
        name: string;
        url: string;
        type: "online" | "print";
      }
    | {
        entryType: "dropdown";
        name: string;
        entries: { title: string; url: string }[];
      }
  )[] = [
    {
      entryType: "dropdown",
      name: "Sweet Mammalian",
      entries: [
        {
          title: "Be gay, do crime",
          url: "https://sweetmammalian.squarespace.com/issue-eleven/zephyrzhang",
        },
        {
          title: "sick leave",
          url: "https://www.sweetmammalian.com/issue-nine/zephyr-zhang",
        },
      ],
    },
    {
      entryType: "dropdown",
      name: "The Spinoff",
      entries: [
        {
          title: "the dancer",
          url: "https://thespinoff.co.nz/books/11-10-2024/the-friday-poem-the-dancer-by-zephyr-zhang",
        },
        {
          title: "you ask me if I still love you",
          url: "https://thespinoff.co.nz/books/08-03-2024/the-friday-poem-you-ask-me-if-i-still-love-you-by-zephyr-zhang",
        },
      ],
    },

    {
      entryType: "single",
      name: "Frontier Poetry",
      url: "https://www.frontierpoetry.com/2024/10/25/zephyr-zhang/",
      type: "online",
    },
    {
      entryType: "single",
      name: "Cartridge Lit",
      url: "https://cartridgelit.com/2024/10/23/animal-crossing/",
      type: "online",
    },
    {
      entryType: "single",
      name: "Symposia",
      url: "https://www.symposiamagazine.com/issue02/zephyr-zhang",
      type: "online",
    },
    {
      entryType: "single",
      name: "Starling",
      url: "https://www.starlingmag.com/issue-14/zephyr-zhang",
      type: "online",
    },
    {
      entryType: "single",
      name: "Cordite",
      url: "http://cordite.org.au/poetry/treat/cucumis-sativus-parvus/",
      type: "online",
    },
    {
      entryType: "single",
      name: "Poetry Lab Shanghai",
      url: "https://www.poetrylabshanghai.com/post/autumn24#:~:text=is%20a%20student.-,The%20air%2C%20thinning,-by%20Zephyr%20Zhang",
      type: "online",
    },
    {
      entryType: "single",
      name: "bad apple",
      url: "https://badapple.gay/2023/11/22/i-used-to-shop-at-newmarket-mall-until-i-realised-it-was-a-spaceship-run-by-evil-aliens-and-was-subsequently-abducted/",
      type: "online",
    },
    {
      entryType: "single",
      name: "Rat World",
      url: "https://www.ratworldmag.com/shop/p/rat-world-issue-seven",
      type: "print",
    },
    {
      entryType: "single",
      name: "Landfall",
      url: "https://www.otago.ac.nz/press/books/landfall-247-spring-2024",
      type: "print",
    },
    {
      entryType: "single",
      name: "Rapture: An Anthology of Performance Poetry from Aotearoa New Zealand",
      url: "https://aucklanduniversitypress.co.nz/rapture/",
      type: "print",
    },
    {
      entryType: "single",
      name: "Mayhem",
      url: "https://www.mayhemjournal.co.nz/shop/product/565007/mayhem-2021--issue-9/",
      type: "print",
    },
  ];

  return (
    <Box>
      <AccordionItem borderColor={accentColor}>
        <h2>
          <AccordionButton borderColor={accentColor}>
            <Box flex="1" textAlign="left">
              <b>Read</b>&nbsp;&nbsp;↳ Online | ▤ Print
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          {journals.map((journal, index) =>
            journal.entryType === "dropdown" ? (
              <DropdownJournal
                key={index}
                name={journal.name}
                entries={journal.entries}
              />
            ) : (
              <JournalLink
                key={index}
                name={journal.name}
                url={journal.url}
                type={journal.type}
              />
            )
          )}
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
};
