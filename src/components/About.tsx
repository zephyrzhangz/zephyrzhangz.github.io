import React from "react";
import {
  AccordionItem,
  Box,
  useColorModeValue,
  AccordionButton,
  AccordionPanel,
  Link,
} from "@chakra-ui/react";
import { ExternalLink } from "./ExternalLink";

export const About = ({
  onOpenAupNewPoets,
}: {
  onOpenAupNewPoets: () => void;
}) => {
  const textColor = useColorModeValue("black", "white");
  const CustomSpacer = ({ height }: { height: string }) => (
    <Box height={height} />
  );

  return (
    <AccordionItem borderTopWidth={0} p={0}>
      <h2>
        <AccordionButton
          borderColor="var(--accent)"
          p={0}
          textColor={textColor}
          _hover={{ bg: "transparent" }}
          _focus={{ boxShadow: "none" }}
        ></AccordionButton>
      </h2>
      <AccordionPanel p={0}>
        <b>Zephyr Zhang</b> is a writer and performer based in Tāmaki Makaurau.
        They are very sleepy and like watching animal TikToks.
        <CustomSpacer height="12px" />
        Zephyr has performed in the Auckland Theatre Company iteration of{" "}
        <i>
          <ExternalLink href="https://www.atc.co.nz/whats-on/past-seasons/past-2022-season/scenes-from-a-yellow-peril">
            Scenes from a Yellow Peril
          </ExternalLink>
        </i>
        ,{" "}
        <i>
          <ExternalLink href="https://nathanjoe.com/i-am-rachel-chu">
            I Am Rachel Chu
          </ExternalLink>
        </i>{" "}
        and <i>OTHER [chinese]</i>. Their poetry is published in places like{" "}
        <i>Cordite</i>, <i>Landfall</i>, <i>Starling</i>, <i>Symposia</i>, and{" "}
        <i>Ōrongohau | Best New Zealand Poems</i>.{" "}
        <CustomSpacer height="12px" />
        Their first chapbook, <i>moonlight circuit</i>, was published in{" "}
        <Link
          as="button"
          type="button"
          onClick={onOpenAupNewPoets}
          fontStyle="italic"
          verticalAlign="baseline"
        >
          AUP New Poets 12
        </Link>
        .
        <CustomSpacer height="20px" />
      </AccordionPanel>
    </AccordionItem>
  );
};
