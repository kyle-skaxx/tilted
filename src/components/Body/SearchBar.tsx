import {Flex, Button, Input, useColorMode,useColorModeValue} from '@chakra-ui/react'

function SearchBar() {
  const { colorMode,  } = useColorMode();

  const handleSearch = (event) => {
    event.preventDefault();
    // P search logic here
  };
  const buttonColor = useColorModeValue('teal', 'hotpink');

return (<>
<form onSubmit={handleSearch}>
  <Flex mt={6} justify="center">
    <Input
      type="text"
      placeholder="Enter Summoner Name"
      maxWidth="md"
      mr={3}
      size='lg'></Input>
      
      <Button
            bg={colorMode === 'dark' ? 'hotpink' : buttonColor}
            color={colorMode === 'dark' ? 'white' : 'black'}
            _hover={{ bg: colorMode === 'dark' ? 'pink' : buttonColor }}
            type="submit"
            size="lg"
          >

      Search
    </Button>
  </Flex>
</form></>)
}
export default SearchBar