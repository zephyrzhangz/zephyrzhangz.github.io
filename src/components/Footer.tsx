import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
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

export default function Footer() {
  return (
    <Box
      as="footer" // Added "as" prop to specify the element type as "footer"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      pos="fixed" // Added "pos" prop to apply a fixed position
      bottom={0} // Added "bottom" prop to set the position at the bottom
      left={0} // Added "left" prop to set the position at the left
      right={0} // Added "right" prop to set the position at the right
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text>© 2023 Zephyr Zhang. </Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"Instagram"} href={"instagram.com/klaxoon"}>
            <FaInstagram />
          </SocialButton>
          <SocialButton label={"Twitter"} href={"twitter.com/dilfs4minecraft"}>
            <FaTwitter />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
