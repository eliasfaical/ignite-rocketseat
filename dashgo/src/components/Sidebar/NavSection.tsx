import { Box, Text, Link, Stack, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import { RiContactsLine, RiDashboardLine } from "react-icons/ri";

interface NavSectionPros {
  title: string;
  children: ReactNode
}

export function NavSection({ title, children }: NavSectionPros) {
  return(
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
      <Stack spacing="4" marginTop="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
}