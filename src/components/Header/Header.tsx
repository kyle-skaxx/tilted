import { Box, Center, useColorMode } from '@chakra-ui/react'
import DarkOrLight from './DarkOrLight.js'
import Logo from '../../assets/Logo.js'

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (<>
    <Box >
    <Box position="absolute" top="0" right="0" paddingTop={3} paddingRight={3}>
        <DarkOrLight />
      </Box>
      <Center justifyContent={'space-around'}> 
        <Box >  
          <Logo colorMode={colorMode} />
        </Box>
      </Center>
    </Box>


  </>)

}

export default Header