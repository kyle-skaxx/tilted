import LandingPage from './components/LandingPage'
import { ChakraProvider } from '@chakra-ui/react'


function App() {
  return (
    <ChakraProvider >
      <LandingPage />
    </ChakraProvider>
  )
}

export default App