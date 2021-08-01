import { Text } from "@chakra-ui/react";

export function Logo() {
  return(
    <Text
      fontSize="3x1"
      fontWeight="bold"
      letterSpacing="tight"
      width="64"
    >
      dashgo
      <Text as="span" color="pink" ml="1">.</Text>
    </Text>
  );
}