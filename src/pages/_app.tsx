import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import theme from '../theme'
import '../styles/font.css'

export interface AppThemeProvider {
  children: React.ReactNode
}

export function AppThemeProvider({ children }: AppThemeProvider) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <Component {...pageProps} />
    </AppThemeProvider>
  )
}
