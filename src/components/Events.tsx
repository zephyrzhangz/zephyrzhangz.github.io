import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";

import { EntryLink } from "./EntryLink";
import { formatDayMonth } from "./formatDate";

const events = [
  {
    date: "2026-04-12",
    label: "Reading with Nick Ascroft",
    url: "https://theopenbook.co.nz/events/2026/3/16/its-what-he-would-have-wanted",
  },
  {
    date: "2026-06-11",
    label: "Yellow Lamp Vol. Basement",
    url: "https://basementtheatre.co.nz/blogs/whats-on/yellow-lamp-poetry-vol-basement",
  },
  {
    date: "2026-06-18",
    label: "Auckland Art Gallery Late Night",
    url: "https://www.undertheradar.co.nz/gig/102892/Gallery-Open-Late-Ersha-Island-Raging-Flowers-Dj-Edyonthebeat.utr",
  },
  {
    date: "2026-07-07",
    label: "AUP New Poets 12 Launch",
    url: "https://www.timeout.co.nz/upcoming-events/winterpoetry1",
  },
  {
    date: "2026-08-22",
    label: "songs about food - dān dān's EP Release Party",
    url: "https://www.eventfinda.co.nz/2026/songs-about-food-the-ep-release-party/auckland/glen-innes",
  },
];

export const Events = () => {
  const accentColor = "var(--accent)";
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
          2026
        </Text>
        {events.map((event, i) => (
          <EntryLink
            key={i}
            url={event.url}
            title={event.label}
            meta={formatDayMonth(event.date)}
          />
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
};
