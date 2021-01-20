import NextLink from 'next/link'
import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const NavLink = (props: HTMLChakraProps<'a'>) => {
  const { href, ...rest } = props

  return (
    <NextLink href={href} passHref>
      <chakra.a
        display="block"
        py="1"
        px="3"
        borderRadius="full"
        color={useColorModeValue('gray.600', 'whiteAlpha.800')}
        fontWeight="normal"
        _hover={{ bg: useColorModeValue('gray.100', 'whiteAlpha.100') }}
        {...rest}
      />
    </NextLink>
  )
}

export default NavLink
