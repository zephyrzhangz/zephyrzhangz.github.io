import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Button,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { ExternalLink } from "./ExternalLink";

const Endorsement = ({
  children,
  by,
  accentColor,
}: {
  children: ReactNode;
  by: ReactNode;
  accentColor: string;
}) => (
  <Box
    as="blockquote"
    borderLeft="2px solid"
    borderColor={accentColor}
    pl={3}
    my={5}
    fontSize="sm"
  >
    <Text lineHeight="tall">{children}</Text>
    <Text mt={2} fontWeight="medium">
      — {by}
    </Text>
  </Box>
);

export const AupNewPoets = () => {
  const accentColor = "var(--accent)";
  return (
    <AccordionItem borderColor={accentColor}>
      <h2>
        <AccordionButton borderColor={accentColor}>
          <Box flex="1" textAlign="left">
            <b>AUP New Poets 12</b>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Text>
          <i>moonlight circuit</i>, Zephyr's debut chapbook, is out now from
          Auckland University Press in <i>AUP New Poets 12</i>.
        </Text>
        <Button
          as="a"
          href="https://aucklanduniversitypress.co.nz/aup-new-poets-12/"
          target="_blank"
          rel="noopener noreferrer"
          mt={3}
          mb={2}
          rounded="md"
          size="sm"
          fontWeight="medium"
          px={5}
          width={{ base: "100%", md: "fit-content" }}
          maxW="100%"
          whiteSpace={{ base: "normal", md: "nowrap" }}
          height="auto"
          py={2}
          color="black"
          bg="var(--accent-highlight)"
          cursor="pointer"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          transition="filter 0.2s ease"
          _hover={{ filter: "brightness(0.92)" }}
        >
          Buy from Auckland University Press&nbsp;↗
        </Button>
        <Endorsement accentColor={accentColor} by="Francis Cooke">
          <i>AUP New Poets 12</i> carries on the high standard set by the series
          and gives a fuller canvas to three young poets who I know we will read
          much more from in the years to come. Open-hearted, funny and extremely
          current, Anuja Mitra, Loretta Riach and Zephyr Zhang all write
          engrossing collections that deliver on the promise of their
          appearances in local and international journals.
        </Endorsement>
        <Endorsement
          accentColor={accentColor}
          by={
            <>
              Melanie Kwang,{" "}
              <ExternalLink href="https://www.ketebooks.co.nz/reviews/review-aup-new-poets-12">
                Kete Books
              </ExternalLink>
            </>
          }
        >
          Zhang's work is immediately recognisable and pleasing in the casual
          ease of their poetic voice. Their introspection and wit floats
          effortlessly off the page to charm readers, even in the face of
          despair. Their humour feels effortless, shifting in and out of the
          light, and sliding into turns of phrase to evoke the night magic they
          know is ever-present.
        </Endorsement>
      </AccordionPanel>
    </AccordionItem>
  );
};
