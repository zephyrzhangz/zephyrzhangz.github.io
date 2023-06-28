import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  IconProps,
  useColorModeValue,
  useColorMode,
  chakra,
  VisuallyHidden,
  AspectRatio,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Content() {
  const { colorMode } = useColorMode();
  const textColor = useColorModeValue("black", "white"); // Set the text color based on the color mode

  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"center"}
        spacing={{ base: 10, md: 3 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", sm: "column", md: "row" }}
      >
        <Flex
          flex={1}
          justify={"center"}
          align={"center"}
          position={"relative"}
          w={"full"}
        >
          <Box
            position={"relative"}
            height={"full"}
            rounded={"md"}
            width={{ base: "100%", sm: "80%", md: "60%", lg: "400px" }}
            overflow={"hidden"}
          >
            {/* <AspectRatio ratio={2}> */}
            <Image
              alt={"Zephyr Zhang"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={"100%"}
              src={"/Zephyr Zhang.jpg"}
            />
            {/* </AspectRatio> */}
          </Box>
        </Flex>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "4xl", sm: "5xl", lg: "7xl" }}
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
          <Text color={textColor}>
            <b>Zephyr Zhang</b> is a writer and performer based in Tāmaki
            Makaurau, whose work explores migrant and queer experiences. Zephyr
            is both neurodivergent and sleepy. They have performed in the
            Auckland Theatre Company iteration of{" "}
            <i>
              <a
                href="https://www.atc.co.nz/auckland-theatre-company/2022/scenes-from-a-yellow-peril/"
                style={{ color: "#F56565" }}
              >
                Scenes from a Yellow Peril
              </a>
            </i>
            , <i>I Am Rachel Chu</i> and <i>OTHER [chinese]</i>. Zephyr's
            writing has featured in{" "}
            <i>
              <a
                href="https://www.starlingmag.com/issue-14/zephyr-zhang"
                style={{ color: "#F56565" }}
              >
                Starling
              </a>
            </i>
            ,{" "}
            <i>
              <a
                href="https://www.sweetmammalian.com/issue-nine/zephyr-zhang"
                style={{ color: "#F56565" }}
              >
                Sweet Mammalian
              </a>
            </i>
            , <i>Mayhem Literary Journal</i>, and a range of independent zines.
          </Text>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Stack direction={"column"} spacing={6}>
              <Button
                rounded={"md"}
                size={"md"}
                fontWeight={"normal"}
                px={9}
                width="fit-content"
              >
                <a
                  href="mailto:zephyrzhangz@gmail.com"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Contact
                </a>
              </Button>
              <Stack direction={"row"} spacing={4}>
                <SocialButton
                  label={"Instagram"}
                  href={"instagram.com/klaxoon"}
                >
                  <FaInstagram />
                </SocialButton>
                <SocialButton
                  label={"Twitter"}
                  href={"twitter.com/dilfs4minecraft"}
                >
                  <FaTwitter />
                </SocialButton>
                <SocialButton
                  label={"GitHub"}
                  href={"https://github.com/zephyrzhangz/"}
                >
                  <FaGithub />
                </SocialButton>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
