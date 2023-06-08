import { Box, Center, useColorMode, Heading, Text} from '@chakra-ui/react'

function Paragraph() {
return (<>
 <Box textAlign="center">
        <Heading as="h1" size="xl">
          Welcome to Tilted
        </Heading>
        <Text fontSize="2xl" noOfLines={3}>
        Review your own and other summoners' stats in League of Legends. 
        </Text>
        <Text fontSize='2xl'>Find out if you're as tilted as a tower on Summoner's Rift, or as cool as a cucumber in the Howling Abyss.</Text>
        <Text fontSize='2xl'> Our cutting-edge, ultra-sophisticated system will analyze your previous games and provide you with a highly scientific assessment of your tilt level.</Text>
      </Box>
</>)

}
export default Paragraph