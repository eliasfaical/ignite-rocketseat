import { Flex, Button, Stack } from '@chakra-ui/react'
import Head from 'next/head'

import { Input } from '../components/Form/Input'

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          bg="gray.800"
          padding="8"
          borderRadius={8}
          flexDirection="column"
        >
          <Stack spacing="6">
            <Input type="email" name="email" label="E-mail" />
            <Input type="password" name="password" label="Password" />
          </Stack>

          <Button type="submit" marginTop="6" colorScheme="pink">Entrar</Button>
        </Flex>
      </Flex>
    </>
  )
}
