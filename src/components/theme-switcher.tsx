import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

export default function ThemeSwitcher() {
  const { toggleColorMode: toggleMode } = useColorMode()
  const iconColor = useColorModeValue('gray.500', 'gray.400')
  const text = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(
    <MoonIcon w={6} h={6} color={iconColor} />,
    <SunIcon w={6} h={6} color={iconColor} />
  )

  return (
    <IconButton
      size="md"
      aria-label={`Switch to ${text} mode`}
      variant="ghost"
      onClick={toggleMode}
      icon={SwitchIcon}
    />
  )
}
