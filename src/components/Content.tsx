import {
  Accordion,
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  useColorModeValue,
  VisuallyHidden,
  Button,
  Collapse,
  useDisclosure,
  Fade,
} from "@chakra-ui/react";
import { FaCamera } from "react-icons/fa";
import { About } from "./About";
import { Read } from "./Read";
import { Events } from "./Events";
import { Contact } from "./Contact";
import { useEffect, useState } from "react";

const CustomSpacer = ({ height }: { height: string }) => (
  <Box height={height} />
);

const ImageWithCaption = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box textAlign="left" position="relative" width="95%">
      <Image
        alt={"Zephyr Zhang"}
        fit={"cover"}
        align={"center"}
        w="100%"
        height="auto"
        rounded={"md"}
        src={"/Zephyr Zhang.jpg"}
        loading="lazy"
      />
      <Flex justifyContent="space-between" alignItems="center" mt={0.2}>
        <Fade in={isOpen}>
          <Text
            fontSize="xs"
            color={useColorModeValue("gray.600", "gray.400")}
            textAlign="center"
            width="100%"
          >
            Photography by Todd Karehana & Julie Zhu
          </Text>
        </Fade>
        <Button
          onClick={onToggle}
          variant="unstyled"
          p={0}
          minWidth="auto"
          size="sm"
        >
          <FaCamera size={12} />
        </Button>
      </Flex>
    </Box>
  );
};

export default function Content() {
  const [expandedIndex, setExpandedIndex] = useState<number | number[]>(0);

  useEffect(() => {
    console.log(expandedIndex);
    if (expandedIndex === -1) {
      setExpandedIndex(0);
    }
  }, [expandedIndex]);

  const handleAccordionChange = (index: number | number[]) => {
    setExpandedIndex(index);
  };
  
  const textColor = useColorModeValue("black", "white");

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      minHeight="100vh" // Ensure that the content is centered vertically across the entire viewport height
      padding="10px" // Add padding to prevent content from touching the edges
    >
      <Container maxW={"7xl"}>
        <Flex
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "center" }} // Ensure vertical centering in all modes
          justify="center" // Ensure the content is centered horizontally
          width="100%" // Ensure Flex takes full width of the container
        >
          <Box
            flex={"1"}
            display="flex"
            justifyContent={"center"}
            alignContent={"center"}
            height={"full"}
            rounded={"md"}
            // width={{ base: "30%", sm: "50%", md: "40%", lg: "20%" }}
            maxWidth={{ base: "100%", md: "30%" }} // Adjusting the width of the photo for different screen sizes
            width={{ base: "100%", md: "40%" }}
            overflow={"hidden"}
            mb={{ base: 2, md: 10 }} // Adjust margin for spacing between photo and text
            mr={{ md: 10 }}
          >
            <ImageWithCaption />
          </Box>
          <Stack
            flex={1}
            spacing={{ base: 5, md: 10 }}
            minHeight={"3px"}
            justifyContent={"center"} // Center the stack content vertically
            maxWidth={{ base: "100%", md: "40%" }}
            width={{ base: "100%", md: "40%" }}
            alignItems={"flex-start"}
          >
            <Heading
              lineHeight={1.1}
              fontWeight="bold"
              fontSize={{ base: "5xl", sm: "6xl", lg: "7xl" }}
              width="full"
              paddingLeft={{ base: 2, sm: 4, md: 0 }}
              paddingRight={{ base: 2, sm: 4, md: 0 }}
            >
              <Text
                as={"span"}
                position={"relative"}
                letterSpacing={{ base: "0.05em", sm: "normal" }}
                _after={{
                  content: "''",
                  width: "full",
                  height: "30%",
                  position: "absolute",
                  bottom: 1,
                  left: 0,
                  bg: "red.400",
                  zIndex: -1,
                }}
              >
                张挚
              </Text>
              <VisuallyHidden>Zephyr Zhang</VisuallyHidden>
            </Heading>
            <Box
              width="100%"
              minWidth={{ base: "100%", md: "40%" }}
              px={{ base: 2, sm: 4, md: 0 }}
            >
            <Text color={textColor}>
            <Accordion               
            width="100%" 
              index={expandedIndex}
              onChange={handleAccordionChange}
              allowToggle>
            <About />
              <Read />
              <Events />
              <Contact />
              </Accordion>
            </Text>
            </Box>
          </Stack>
        </Flex>
      </Container>
    </Flex>
  );
}
