import { Box, Link } from "@chakra-ui/react";

interface JournalLinkProps {
  name: string;
  url: string;
  type: "online" | "print";
}

export const JournalLink = ({ name, url, type }: JournalLinkProps) => {
  return (
    <Box display="flex">
      <Box minW="1.2em">{type === "online" ? "↳" : "▤"}</Box>
      <Link
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "inline-block",
          paddingLeft: "0.5em",
          marginLeft: "-0.5em",
          paddingRight: "1em",
          textAlign: "left",
          whiteSpace: "normal",
          wordWrap: "break-word"
        }}
      >
        {name}
      </Link>
    </Box>
  );
};