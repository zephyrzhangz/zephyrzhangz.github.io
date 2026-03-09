import { Box } from "@chakra-ui/react";
import { ExternalLink } from "../ExternalLink";

interface JournalLinkProps {
  name: string;
  url: string;
  type: "online" | "print";
}

export const JournalLink = ({ name, url, type }: JournalLinkProps) => {
  return (
    <Box>
      <ExternalLink href={url}>
        {type === "online" ? "↳" : "▤"} {name}
      </ExternalLink>
    </Box>
  );
};
