import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Image,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { Read } from "./Read";
import { Events } from "./Events";
import { Contact } from "./Contact";

const CustomSpacer = ({ height }: { height: string }) => (
  <Box height={height} />
);

export default function Content() {
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
            mb={{ base: 5, md: 10 }} // Adjust margin for spacing between photo and text
            mr={{ md: 10 }}
          >
            <Image
              alt={"Zephyr Zhang"}
              fit={"cover"}
              align={"center"}
              w={{ base: "90%", md: "90%" }}
              maxW={{ base: "90%", md: "90%" }} // Set maximum width to control size more directly
              height="auto" // Maintain aspect ratio
              rounded={"md"}
              src={"/Zephyr Zhang.jpg"}
            />
          </Box>
          <Stack
            flex={1}
            spacing={{ base: 5, md: 10 }}
            minHeight={"500px"}
            justifyContent={"center"} // Center the stack content vertically
            maxWidth={{ base: "100%", md: "40%" }}
            width={{ base: "100%", md: "40%" }}
            alignItems={"flex-start"}
          >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "4xl", sm: "5xl", lg: "7xl" }}
              width="full"
              paddingLeft={{ base: 2, sm: 4, md: 0 }}
              paddingRight={{ base: 2, sm: 4, md: 0 }}
            >
              <Text
                as={"span"}
                position={"relative"}
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
            <Text color={textColor} px={{ base: 2, sm: 4, md: 0 }}>
              {" "}
              {/* Add padding to the text in smaller screens for better readability */}
              <b>Zephyr Zhang</b> is a writer and performer based in Tāmaki
              Makaurau. They are very sleepy and like watching animal TikToks.
              <CustomSpacer height="12px" />
              Zephyr has performed in the Auckland Theatre Company iteration of{" "}
              <i>
                <a
                  href="https://www.atc.co.nz/auckland-theatre-company/2022/scenes-from-a-yellow-peril/"
                  target="_blank" // Open link in a new tab
                  rel="noopener noreferrer" // Security measure
                >
                  Scenes from a Yellow Peril
                </a>
              </i>
              ,{" "}
              <i>
                <a
                  href="https://nathanjoe.com/i-am-rachel-chu"
                  target="_blank" // Open link in a new tab
                  rel="noopener noreferrer" // Security measure
                >
                  I Am Rachel Chu
                </a>
              </i>{" "}
              and <i>OTHER [chinese]</i>. Their writing is published or
              forthcoming in places like <i>Cordite</i>, <i>Landfall</i>,{" "}
              <i>Starling</i>, and{" "}
              <i>
                Rapture: An Anthology of Performance Poetry from Aotearoa New
                Zealand
              </i>
              .
              <Read />
              <Events />
              <Contact />
            </Text>
          </Stack>
        </Flex>
      </Container>
    </Flex>
  );
}
