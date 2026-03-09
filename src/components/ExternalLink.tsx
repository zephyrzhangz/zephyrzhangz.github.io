import { Link, LinkProps } from "@chakra-ui/react";

export const ExternalLink = (props: LinkProps) => (
  <Link target="_blank" rel="noopener noreferrer" {...props} />
);
