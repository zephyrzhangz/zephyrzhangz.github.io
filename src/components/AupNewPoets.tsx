import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  Button,
  useColorModeValue,
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
    my={3}
    fontSize="sm"
  >
    <Text>{children}</Text>
    <Text mt={1} fontWeight="medium">
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
        <i>moonlight circuit</i>, Zephyr's debut chapbook, is out now from
        Auckland University Press in <i>AUP New Poets 12</i>.
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
        <Button
          as="a"
          href="https://aucklanduniversitypress.co.nz/aup-new-poets-12/"
          target="_blank"
          rel="noopener noreferrer"
          mt={2}
          rounded="md"
          size="sm"
          fontWeight="normal"
          px={5}
          width="fit-content"
          color={accentColor}
          bg="transparent"
          border={`1px solid ${accentColor}`}
          cursor="pointer"
          display="inline-flex"
          alignItems="center"
          justifyContent="center"
          transition="background 0.3s ease, border-color 0.3s ease"
          _hover={{
            bg: useColorModeValue("blackAlpha.200", "transparent"),
            border: `1px solid ${useColorModeValue("black", "white")}`,
          }}
        >
          Buy from Auckland University Press&nbsp;↗
        </Button>
      </AccordionPanel>
    </AccordionItem>
  );
};
