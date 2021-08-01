import { Flex, Box, Stack, Text, Link, Icon } from '@chakra-ui/react';
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri';

import { NavSection } from './NavSection';

export function Sidebar() {
  return(
    <Box as="aside" width="64" marginRight="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <Link display="flex" align="center">
            <Icon as={RiDashboardLine} fontSize="20" />
            <Text marginLeft="4" fontWeight="medium">Dasboard</Text>
          </Link>
          <Link display="flex" align="center">
            <Icon as={RiContactsLine} fontSize="20" />
            <Text marginLeft="4" fontWeight="medium">Usuários</Text>
          </Link>
        </NavSection>

        <NavSection title="AUTOMAÇÃO">
          <Link display="flex" align="center">
            <Icon as={RiInputMethodLine} fontSize="20" />
            <Text marginLeft="4" fontWeight="medium">Formulários</Text>
          </Link>
          <Link display="flex" align="center">
            <Icon as={RiGitMergeLine} fontSize="20" />
            <Text marginLeft="4" fontWeight="medium">Automação</Text>
          </Link>
        </NavSection>
      </Stack>
    </Box>
  )
}