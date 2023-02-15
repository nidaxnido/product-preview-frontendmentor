import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
export default function App({ Component, pageProps }) {
  const breakpoints = {
    sm: '376px',
    md: '376px',
    lg: '376px',
    xl: '376px',
    '2xl': '96em',
  }
  
  const theme = extendTheme({ breakpoints,})
  return <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  
}
