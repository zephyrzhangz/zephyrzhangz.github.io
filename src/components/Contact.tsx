import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import {
  Stack,
  Box,
  Button,
  useColorModeValue,
  chakra,
  VisuallyHidden,
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
      bg="transparent" // Transparent background
      border="1px solid #F56565" // Red border
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      target="_blank" // Open link in a new tab
      rel="noopener noreferrer" // Security measure
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease, border-color 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "transparent"), // Adjust hover background
        border: `1px solid ${useColorModeValue("black", "white")}`,
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export const Contact = () => {
  const accentColor = "#F56565";
  return (
      <AccordionItem borderColor="#F56565">
        <h2>
          <AccordionButton borderColor="#F56565">
            <Box flex="1" textAlign="left">
              <b>Contact</b>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
          >
            <Stack direction={"column"} spacing={6}>
              <Button
                rounded={"md"}
                size={"md"}
                fontWeight={"normal"}
                color={"#F56565"}
                px={9}
                width="fit-content"
                bg="transparent" // Transparent background
                border="1px solid #F56565" // Red border
                cursor={"pointer"}
                as={"a"}
                href="mailto:zephyrzhangz@gmail.com"
                target="_blank" // Open link in a new tab
                rel="noopener noreferrer" // Security measure
                display={"inline-flex"}
                alignItems={"center"}
                justifyContent={"center"}
                transition={"background 0.3s ease, border-color 0.3s ease"}
                _hover={{
                  bg: useColorModeValue("blackAlpha.200", "transparent"), // Adjust hover background
                  border: `1px solid ${useColorModeValue("black", "white")}`,
                }}
              >
                Email
              </Button>
              <Stack direction={"row"} spacing={4}>
                <SocialButton
                  label={"Instagram"}
                  href={"https://instagram.com/klaxoon"}
                >
                  <FaInstagram />
                </SocialButton>
                <SocialButton
                  label={"Twitter"}
                  href={"https://twitter.com/zephyrzhangz"}
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
        </AccordionPanel>
      </AccordionItem>
  );
};
