import { Box, Button, Collapse, useDisclosure, useColorMode } from "@chakra-ui/react";
import { ExternalLink } from "../ExternalLink";

interface DropdownJournalProps {
  name: string;
  entries: { title: string; url: string }[];
}

export const DropdownJournal = ({ name, entries }: DropdownJournalProps) => {
  const linkColor = "#F56565";
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode();

  return (
    <Box>
      <Button
        variant="link"
        onClick={onToggle}
        textAlign="left"
        fontWeight="normal"
        fontSize="inherit"
        color={isOpen ? (colorMode === "dark" ? "gray.200" : "gray.800") : linkColor}
        _hover={{
          color: colorMode === "dark" ? "gray.200" : "gray.800",
          textDecoration: "none",
        }}
      >
        ↳ {name}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box pl={4} mt={2} mb={isOpen ? 4 : 0}>
          {entries.map((entry, index) => (
            <Box key={index}>
              <ExternalLink href={entry.url}>
                ◦ {entry.title}
              </ExternalLink>
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};
