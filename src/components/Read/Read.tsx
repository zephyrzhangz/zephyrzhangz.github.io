import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { JournalLink } from "./JournalLink";

export const Read = () => {
  const accentColor = "var(--accent)";

  const scrollRef = useRef<HTMLDivElement>(null);
  const [fade, setFade] = useState({ top: false, bottom: false });

  const updateFade = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const top = el.scrollTop > 4;
    const bottom = el.scrollTop + el.clientHeight < el.scrollHeight - 4;
    setFade((prev) =>
      prev.top === top && prev.bottom === bottom ? prev : { top, bottom },
    );
  }, []);

  // Re-measure on mount and whenever the panel resizes (e.g. accordion opens).
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateFade();
    const observer = new ResizeObserver(updateFade);
    observer.observe(el);
    return () => observer.disconnect();
  }, [updateFade]);

  const maskImage = `linear-gradient(to bottom, ${[
    fade.top ? "transparent" : "#000",
    ...(fade.top ? ["#000 32px"] : []),
    ...(fade.bottom ? ["#000 calc(100% - 32px)"] : []),
    fade.bottom ? "transparent" : "#000",
  ].join(", ")})`;

  type JournalEntry = {
    name: string;
    url: string;
    poems: string[];
    type: "online" | "print";
    date: string;
  };

  const journals: JournalEntry[] = [
    {
      name: "Starling",
      url: "https://www.starlingmag.com/issue-22/guest-writers",
      poems: ["Cranium avium"],
      type: "online",
      date: "2026-08-04",
    },
    {
      name: "Going Down Swinging",
      url: "https://goingdownswinging.org.au/archives/my-immortal-angst/",
      poems: ["my immortal angst"],
      type: "online",
      date: "2025-08-25",
    },
    {
      name: "Ōrongohau | Best New Zealand Poems",
      url: "https://www.bestnewzealandpoems.org.nz/past-issues/2024-contents/zephyr-zhang/",
      poems: ["with friends like these"],
      type: "online",
      date: "2025-03-31",
    },
    {
      name: "Poetry Aotearoa Yearbook",
      url: "https://masseypress.ac.nz/products/poetry-aotearoa-yearbook-2025",
      poems: ["What Was Built Over"],
      type: "print",
      date: "2025-08-14",
    },
    {
      name: "Turbine | Kapohau",
      url: "https://turbinekapohau.org.nz/archive-issues/2024-contents/poetry-zephyr-zhang/",
      poems: [
        "in this borrowed slice of fading summer",
        "what does it mean to know",
      ],
      type: "online",
      date: "2024-12-11",
    },
    {
      name: "takahē",
      url: "https://www.takahe.org.nz/silly-goose/",
      poems: ["silly goose"],
      type: "online",
      date: "2024-12-08",
    },
    {
      name: "Sweet Mammalian",
      url: "https://www.sweetmammalian.com/issue-eleven/zephyrzhang",
      poems: ["Be gay, do crime"],
      type: "online",
      date: "2024-11-09",
    },
    {
      name: "Frontier Poetry",
      url: "https://www.frontierpoetry.com/2024/10/25/zephyr-zhang/",
      poems: ["Object Permanence"],
      type: "online",
      date: "2024-10-25",
    },
    {
      name: "Cartridge Lit",
      url: "https://cartridgelit.com/2024/10/23/animal-crossing/",
      poems: ["why are you playing animal crossing instead of talking to me"],
      type: "online",
      date: "2024-10-23",
    },
    {
      name: "The Spinoff",
      url: "https://thespinoff.co.nz/books/11-10-2024/the-friday-poem-the-dancer-by-zephyr-zhang",
      poems: ["the dancer"],
      type: "online",
      date: "2024-10-11",
    },
    {
      name: "Poetry Lab Shanghai",
      url: "https://www.poetrylabshanghai.com/post/autumn24#:~:text=is%20a%20student.-,The%20air%2C%20thinning,-by%20Zephyr%20Zhang",
      poems: ["The air, thinning"],
      type: "online",
      date: "2024-09-16",
    },
    {
      name: "Symposia",
      url: "https://www.symposiamagazine.com/issue02/zephyr-zhang",
      poems: [
        "i dump my car for a horse and regret it for the rest of my life",
      ],
      type: "online",
      date: "2024-07-05",
    },
    {
      name: "Cordite",
      url: "http://cordite.org.au/poetry/treat/cucumis-sativus-parvus/",
      poems: ["Cucumis Sativus Parvus"],
      type: "online",
      date: "2024-07-05",
    },
    {
      name: "Rapture: An Anthology of Performance Poetry from Aotearoa New Zealand",
      url: "https://aucklanduniversitypress.co.nz/rapture/",
      poems: ["red"],
      type: "print",
      date: "2023-11-09",
    },
    {
      name: "Sweet Mammalian",
      url: "https://www.sweetmammalian.com/issue-nine/zephyr-zhang",
      poems: ["sick leave"],
      type: "online",
      date: "2022-11-05",
    },
    {
      name: "Starling",
      url: "https://www.starlingmag.com/issue-14/zephyr-zhang",
      poems: [
        "we are frogs and I love you by the river",
        "playing grand theft auto after bumping into my ex",
        "burger king poem",
      ],
      type: "online",
      date: "2022-02-13",
    },
  ];

  const sections: { label: string; type: JournalEntry["type"] }[] = [
    { label: "Online", type: "online" },
    { label: "Print", type: "print" },
  ];

  const entriesForSection = (type: JournalEntry["type"]) =>
    journals
      .filter((journal) => journal.type === type)
      .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Box>
      <AccordionItem borderColor={accentColor}>
        <h2>
          <AccordionButton borderColor={accentColor}>
            <Box flex="1" textAlign="left">
              <b>Read</b>&nbsp;&nbsp;↳ Selected Work
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4} mb={-3}>
          <Text
            display={{ base: "block", md: "none" }}
            mt={-1.5}
            mb={3}
            fontSize={"small"}
          >
            Use desktop mode for proper formatting.
          </Text>
          <Box
            ref={scrollRef}
            onScroll={updateFade}
            maxH={{ base: "none", md: "360px" }}
            overflowY={{ base: "visible", md: "auto" }}
            pr={{ base: 0, md: 2 }}
            sx={{
              maskImage,
              WebkitMaskImage: maskImage,
              "&::-webkit-scrollbar": { width: "6px" },
              "&::-webkit-scrollbar-track": { background: "transparent" },
              "&::-webkit-scrollbar-thumb": {
                background: "var(--accent)",
                borderRadius: "3px",
              },
            }}
          >
            {sections.map(({ label, type }) => (
              <Box key={type} mb={4}>
                <Text fontWeight="bold" mb={1}>
                  {label}
                </Text>
                {entriesForSection(type).map((journal, index) => (
                  <JournalLink
                    key={index}
                    poems={journal.poems}
                    name={journal.name}
                    url={journal.url}
                    date={journal.date}
                  />
                ))}
              </Box>
            ))}
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Box>
  );
};
