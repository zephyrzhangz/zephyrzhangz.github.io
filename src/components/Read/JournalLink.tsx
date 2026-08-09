import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { ExternalLink } from "../ExternalLink";

interface JournalLinkProps {
  poems: string[];
  name: string;
  url: string;
  date: string;
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const COUNT_WORDS = ["", "", "Two", "Three", "Four", "Five", "Six", "Seven"];

const formatMonthYear = (date: string) => {
  const [year, month] = date.split("-");
  return `${MONTHS[Number(month) - 1]} ${year}`;
};

const formatPoems = (poems: string[]) =>
  poems.length === 1
    ? poems[0]
    : `${COUNT_WORDS[poems.length] ?? poems.length} Poems (${poems.join("; ")})`;

export const JournalLink = ({ poems, name, url, date }: JournalLinkProps) => {
  const mutedColor = useColorModeValue("gray.500", "gray.500");

  const hasPoems = poems.length > 0;

  return (
    <Box mb={2.5} pl={4} textIndent="-1rem" lineHeight="short">
      <ExternalLink
        href={url}
        fontWeight="medium"
        color="inherit"
        _hover={{ color: "var(--accent)", textDecoration: "none" }}
      >
        {hasPoems ? formatPoems(poems) : name}
      </ExternalLink>
      <Text as="span" display="block" fontSize="sm" color={mutedColor}>
        {hasPoems && `${name} `}({formatMonthYear(date)})
      </Text>
    </Box>
  );
};
