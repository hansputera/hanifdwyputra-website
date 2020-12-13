import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex justifyContent="center" alignItems="center" height="200vh">
    <Heading fontSize="6vw">👋 {title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'Hello There',
}
