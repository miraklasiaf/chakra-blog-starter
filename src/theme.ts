import { extendTheme } from '@chakra-ui/react'
import { mode, Styles } from '@chakra-ui/theme-tools'

const styles: Styles = {
  global: (props) => ({
    body: {
      fontFamily: 'body',
      color: mode('gray.900', 'hsl(0deg, 0%, 100%)')(props),
      bg: mode('white', 'black')(props),
      lineHeight: 'normal',
      minHeight: 'full'
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props)
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      boxSizing: 'border-box',
      wordWrap: 'break-word'
    },
    fontFeatureSettings: `'kern'`,
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased'
  })
}

export default extendTheme({
  styles,
  fonts: {
    heading: `Inter,-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    body: `Inter,-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    mono: `SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace`
  }
})
