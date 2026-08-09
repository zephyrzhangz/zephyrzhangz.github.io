import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import { ExternalLink } from "./ExternalLink";

interface EntryLinkProps {
  title: string;
  meta: string;
  url: string;
}

export const EntryLink = ({ title, meta, url }: EntryLinkProps) => {
  const mutedColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box mb={2.5} pl={4} textIndent="-1rem" lineHeight="short">
      <ExternalLink
        href={url}
        color="inherit"
        _hover={{ color: "var(--accent)", textDecoration: "none" }}
      >
        {title}
      </ExternalLink>
      <Text as="span" display="block" fontSize="xs" color={mutedColor}>
        {meta}
      </Text>
    </Box>
  );
};
