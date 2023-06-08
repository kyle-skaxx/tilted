import { Button, useColorMode } from '@chakra-ui/react';
import {MdDarkMode} from 'react-icons/md'
import {BsFillSunFill} from 'react-icons/bs'
function DarkOrLight() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Button onClick={toggleColorMode}>
         {colorMode === 'dark' ?  <MdDarkMode/>:<BsFillSunFill/> } 
      </Button>
    </>
  );
}

export default DarkOrLight;
