import { Link as ChakraLink, Button } from '@chakra-ui/react'

import { Container } from './Container'

export const CTA = () => (
  <Container
    flexDirection="row"
    position="fixed"
    bottom="0"
    width="100%"
    maxWidth="48rem"
    py={2}
  >
    <ChakraLink isExternal href="https://saweria.co/hanifdwypoetra" flexGrow={2} mx={2}>
      <Button width="100%" variant="solid" colorScheme="green">
        Donate
      </Button>
    </ChakraLink>
    <ChakraLink isExternal href="https://github.com/hansputera/hanifdwyputra.xyz-rewrite" flexGrow={2} mx={2}>
        <Button width="100%" variant="solid" colorScheme="blue">
          GitHub Repository
        </Button>
    </ChakraLink>
  </Container>
)
