import { Box, Link } from "@chakra-ui/react";

interface JournalLinkProps {
  name: string;
  url: string;
  type: "online" | "print"; // Online or print link
}

export const JournalLink = ({ name, url, type }: JournalLinkProps) => {
  return (
    <Box>
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {type === "online" ? "↳" : "▤"} {name}
      </Link>
    </Box>
  );
};
