import { EntryLink } from "../EntryLink";
import { formatMonthYear } from "../formatDate";

interface JournalLinkProps {
  poems: string[];
  name: string;
  url: string;
  date: string;
}

const COUNT_WORDS = ["", "", "Two", "Three", "Four", "Five", "Six", "Seven"];

const formatPoems = (poems: string[]) =>
  poems.length === 1
    ? poems[0]
    : `${COUNT_WORDS[poems.length] ?? poems.length} Poems (${poems.join("; ")})`;

export const JournalLink = ({ poems, name, url, date }: JournalLinkProps) => {
  const hasPoems = poems.length > 0;

  return (
    <EntryLink
      url={url}
      title={hasPoems ? formatPoems(poems) : name}
      meta={`${hasPoems ? `${name} ` : ""}(${formatMonthYear(date)})`}
    />
  );
};
