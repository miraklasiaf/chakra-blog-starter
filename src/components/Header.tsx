import * as React from 'react'
import { useViewportScroll } from 'framer-motion'
import { NavLink } from './NavLink'
import { Flex, Box, HStack, useColorModeValue } from '@chakra-ui/react'
import { CMS_NAME } from '../pages'

const HeaderContent = () => {
  return (
    <Flex w="full" h="full" px={{ base: 4, md: 6 }} align="center" justify="space-between">
      <Flex align="center">
        <HStack as="nav" spacing={4}>
          <NavLink href="/">{CMS_NAME}</NavLink>
          <NavLink href="/blog">Blog</NavLink>
        </HStack>
      </Flex>
    </Flex>
  )
}

const Header = (props) => {
  const bg = useColorModeValue('white', 'bg.dark')
  const ref = React.useRef<HTMLHeadingElement>()
  const [y, setY] = React.useState(0)
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}
  const { scrollY } = useViewportScroll()

  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])

  return (
    <Box
      as="header"
      shadow={y > height ? 'sm' : undefined}
      transition="box-shadow 0.2s"
      pos="fixed"
      w="full"
      insetX={0}
      top={0}
      bg={bg}
      zIndex="1"
      {...props}
    >
      <Box h={16} mx="auto" maxW="1200px">
        <HeaderContent />
      </Box>
    </Box>
  )
}

export default Header
