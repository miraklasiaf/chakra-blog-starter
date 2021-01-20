import { Box } from '@chakra-ui/react'
import Header from './Header'

export interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <Box maxWidth="6xl" mx="auto" p="3" mb="8">
      <Header />
      <Box as="main" mt="32" px="8">
        {children}
      </Box>
    </Box>
  )
}
