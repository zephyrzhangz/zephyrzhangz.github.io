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
  { date: "20 Feb", label: "Yellow Lamp Vol. Pride", url: "https://events.humanitix.com/yellow-lamp-vol-pride" },
  { date: "12 Apr", label: "Cadence Chung - Mad Diva Launch", url: "https://www.otago.ac.nz/news/events/auckland-book-launch-mad-diva-by-cadence-chung" },
  { date: "11 Jul", label: "Jiaqiao Liu - Dear Alter Launch", url: "https://aucklanduniversitypress.co.nz/news/book-launch-dear-alter/" },
  { date: "14 Aug", label: "Sophie van Waardenberg - No Good Launch", url: "https://aucklanduniversitypress.co.nz/news/book-launch-no-good/" },
  { date: "18 Aug", label: "Writers on Mondays – Ōrongohau: BNZP 2024", url: "https://www.tepapa.govt.nz/visit/events/writers-on-mondays-orongohau-best-new-zealand-poems-2024" },
  { date: "22 Aug", label: "Poetry Aotearoa Yearbook 2025 Launch", url: "https://www.facebook.com/events/1434554414522783/" },
  { date: "29 Aug", label: "Winter Poetry Festival", url: "https://www.instagram.com/yellowlamppoetry/" },
  { date: "21 Sep", label: "Starling 20 Launch", url: "https://theopenbook.co.nz/events/2025/9/3/starling-twenty-launch" },
  { date: "10 Dec", label: "I'll Be Homo For Christmas", url: "https://www.iticket.co.nz/events/2025/dec/ill-be-homo-by-christmas-a-evening-of-queer-poetry" },
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
          2025
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
