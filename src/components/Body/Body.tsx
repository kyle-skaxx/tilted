import { Box, Center, useColorMode, Heading, } from '@chakra-ui/react'
import Visual from '../../assets/Visual'
import Paragraph from './Paragraph'
import SearchBar from './SearchBar';
function Body() { 
  const { colorMode, toggleColorMode } = useColorMode();


  return (<>
  <Center>
  <Visual colorMode={colorMode}/>
  </Center>
  <Paragraph/>
  <SearchBar/>
  
  </>)

}

export default Body