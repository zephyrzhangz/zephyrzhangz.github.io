import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";

import { Box } from "@chakra-ui/react";
import { ExternalLink } from "./ExternalLink";

const events = [
  { date: "12 Apr", label: "Reading with Nick Ashcroft", url: "https://theopenbook.co.nz/events/2026/3/16/its-what-he-would-have-wanted" },
  { date: "11 Jun", label: "Yellow Lamp Vol. Basement", url: "https://basementtheatre.co.nz/blogs/whats-on/yellow-lamp-poetry-vol-basement" },
  { date: "18 Jun", label: "Auckland Art Gallery Late Night", url: "https://www.undertheradar.co.nz/gig/102892/Gallery-Open-Late-Ersha-Island-Raging-Flowers-Dj-Edyonthebeat.utr" },
  { date: "7 Jul", label: "AUP New Poets 12 Launch", url: "https://www.timeout.co.nz/upcoming-events/winterpoetry1" },
];

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
          2026
        </Text>
        {events.map((event, i) => (
          <span key={i}>
            {event.date} - <ExternalLink href={event.url}>{event.label}</ExternalLink>
            {i < events.length - 1 && <br />}
          </span>
        ))}
      </AccordionPanel>
    </AccordionItem>
  );
};
