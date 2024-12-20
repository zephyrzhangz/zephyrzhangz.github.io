import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import { JournalLink } from "./JournalLink";
import { DropdownJournal } from "./DropdownJournal";

export const Read = () => {
  const accentColor = "#F56565";

  type JournalEntry =
    | {
        entryType: "single";
        name: string;
        url: string;
        type: "online" | "print";
        date: string;
      }
    | {
        entryType: "dropdown";
        name: string;
        entries: {
          title: string;
          url: string;
          date: string;
        }[];
      };

  const journals: JournalEntry[] = [
    {
      entryType: "single",
      name: "Turbine | Kapohau",
      url: "https://turbinekapohau.org.nz/2024-contents-poetry-zephyr-zhang/",
      type: "online",
      date: "2024-12-11",
    },
    {
      entryType: "single",
      name: "takahē",
      url: " https://www.takahe.org.nz/silly-goose/",
      type: "online",
      date: "2024-12-08",
    },
    {
      entryType: "single",
      name: "Sweet Mammalian",
      url: "https://www.sweetmammalian.com/issue-eleven/zephyrzhang",
      type: "online",
      date: "2024-11-09",
    },
    {
      entryType: "single",
      name: "Frontier Poetry",
      url: "https://www.frontierpoetry.com/2024/10/25/zephyr-zhang/",
      type: "online",
      date: "2024-10-25",
    },
    {
      entryType: "single",
      name: "Cartridge Lit",
      url: "https://cartridgelit.com/2024/10/23/animal-crossing/",
      type: "online",
      date: "2024-10-23",
    },
    {
      entryType: "single",
      name: "The Spinoff (11/10)",
      url: "https://thespinoff.co.nz/books/11-10-2024/the-friday-poem-the-dancer-by-zephyr-zhang",
      type: "online",
      date: "2024-10-11",
    },
    {
      entryType: "single",
      name: "Poetry Lab Shanghai",
      url: "https://www.poetrylabshanghai.com/post/autumn24#:~:text=is%20a%20student.-,The%20air%2C%20thinning,-by%20Zephyr%20Zhang",
      type: "online",
      date: "2024-09-16",
    },
    {
      entryType: "single",
      name: "Symposia",
      url: "https://www.symposiamagazine.com/issue02/zephyr-zhang",
      type: "online",
      date: "2024-07-05",
    },
    {
      entryType: "single",
      name: "Rat World",
      url: "https://www.ratworldmag.com/shop/p/rat-world-issue-seven",
      type: "print",
      date: "2024-07-04",
    },
    {
      entryType: "single",
      name: "Landfall",
      url: "https://www.otago.ac.nz/press/books/landfall-247-spring-2024",
      type: "print",
      date: "2024-05-27",
    },
    {
      entryType: "single",
      name: "Cordite",
      url: "http://cordite.org.au/poetry/treat/cucumis-sativus-parvus/",
      type: "online",
      date: "2024-07-05",
    },
    {
      entryType: "single",
      name: "The Spinoff (08/03)",
      url: "https://thespinoff.co.nz/books/08-03-2024/the-friday-poem-you-ask-me-if-i-still-love-you-by-zephyr-zhang",
      type: "online",
      date: "2024-07-05",
    },
    {
      entryType: "single",
      name: "bad apple",
      url: "https://badapple.gay/2023/11/22/i-used-to-shop-at-newmarket-mall-until-i-realised-it-was-a-spaceship-run-by-evil-aliens-and-was-subsequently-abducted/",
      type: "online",
      date: "2023-11-22",
    },
    {
      entryType: "single",
      name: "Rapture: An Anthology of Performance Poetry from Aotearoa New Zealand",
      url: "https://aucklanduniversitypress.co.nz/rapture/",
      type: "print",
      date: "2023-11-09",
    },
    {
      entryType: "single",
      name: "Sweet Mammalian",
      url: "https://www.sweetmammalian.com/issue-nine/zephyr-zhang",
      type: "online",
      date: "2022-11-05",
    },
    {
      entryType: "single",
      name: "Starling",
      url: "https://www.starlingmag.com/issue-14/zephyr-zhang",
      type: "online",
      date: "2022-02-13",
    },
    {
      entryType: "single",
      name: "Mayhem",
      url: "https://www.mayhemjournal.co.nz/shop/product/565007/mayhem-2021--issue-9/",
      type: "print",
      date: "2021-12-10",
    },
  ];

  function groupAndSortJournals(journals: JournalEntry[]) {
    const grouped: Record<string, JournalEntry[]> = {};

    journals.forEach((journal) => {
      const date =
        journal.entryType === "single" ? journal.date : journal.entries[0].date;
      const year = date.split("-")[0];

      if (!grouped[year]) grouped[year] = [];
      grouped[year].push(journal);
    });

    const sortedYears = Object.keys(grouped).sort(
      (a, b) => Number(b) - Number(a)
    );

    return sortedYears.map((year) => ({
      year,
      entries: grouped[year].sort((a, b) => {
        const dateA = a.entryType === "single" ? a.date : a.entries[0].date;
        const dateB = b.entryType === "single" ? b.date : b.entries[0].date;
        return new Date(dateB).getTime() - new Date(dateA).getTime();
      }),
    }));
  }

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
        <AccordionPanel pb={4} mb={-3}>
          <Text
            display={{ base: "block", md: "none" }} // Show only in mobile (base to md)
            mt={-1.5}
            mb={3}
            fontSize={"small"}
          >
            Use desktop mode for proper formatting.
          </Text>
          {groupAndSortJournals(journals).map(({ year, entries }) => (
            <Box key={year} mb={4}>
              <Text fontWeight="bold" mb={1}>
                {year}
              </Text>
              {entries.map((journal, index) =>
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
            </Box>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
};
