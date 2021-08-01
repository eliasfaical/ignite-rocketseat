import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import React from "react";

export function Profile() {
  return(
    <Flex align="center">
      <Box marginRight="4" textAlign="right">
        <Text>Elias Faiçal</Text>
        <Text color="gray.300" fontSize="small">
          eliasfaical@gmail.com
        </Text>
      </Box>

      <Avatar size="md" name="Elias Faiçal" src="https://github.com/eliasfaical.png" />
    </Flex>
  );
}