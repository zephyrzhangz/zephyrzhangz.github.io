import { Box, Button, Collapse, Link, useDisclosure, useColorMode } from "@chakra-ui/react";

interface DropdownJournalProps {
  name: string;
  entries: { title: string; url: string }[];
}

export const DropdownJournal = ({ name, entries }: DropdownJournalProps) => {
  const linkColor = "#F56565";
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode } = useColorMode(); // Access current color mode


  return (
    <Box> 
      <Button
        variant="link"
        onClick={onToggle}
        textAlign="left"
        fontWeight="normal"
        color={linkColor}
        _hover={{
          color: colorMode === "dark" ? "gray.200" : "gray.800", // Match hover behavior
          textDecoration: "none",
        }}
      >
        ↳ {name}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box pl={4} mt={2} mb={isOpen ? 4 : 0}>
          {entries.map((entry, index) => (
            <Box key={index}>
              <Link
                href={entry.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                – {entry.title}
              </Link>
            </Box>
          ))}
        </Box>
      </Collapse>
    </Box>
  );
};
