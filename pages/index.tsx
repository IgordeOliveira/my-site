import {
    Avatar,
    Text,
    Box,
    Center,
    Flex,
    Heading,
    Link,
    Button,
    Stack,
    Tooltip,
    SimpleGrid,
    Spacer,
} from "@chakra-ui/react"
import {Icon} from '@chakra-ui/icons'
import {BiHomeHeart} from "react-icons/bi";
import {AiFillLinkedin, AiOutlineGithub} from "react-icons/ai";
import {ImBlog} from "react-icons/im";
import TextBold from "../components/TextBold";

export default function Home() {
    return (
        <Center h="100vh">
            <SimpleGrid
                maxW="690px" borderRadius="lg" overflow="hidden" bg="#2f36405C" backdropFilter="blur(3px)" boxShadow="sm" p={5} minHeight="265px"
                columns={2}
            >
                <Box>
                    <Flex flexDir={"column"} align="center">
                        <Avatar size="2xl" mb="4" name="Igor Oliveira" src="profilePhoto2.jpg" boxShadow="0 0 0 3px #edf6fc"/>
                        <Heading size="lg" fontWeight="bold">Igor Oliveira</Heading>
                        <Text
                            fontSize="sm"
                            mt={4}
                            ml={-2}
                            style={{
                                verticalAlign: 'middle',
                                display: 'inline-flex'
                            }}><Icon boxSize={5} as={BiHomeHeart} marginRight={1}/>Living in the sunny Vitória, ES

                        </Text>
                    </Flex>
                </Box>
                <Flex direction="column">
                    <Text fontSize="md" >Hi, I'm a software developer :) </Text>
                    <Text fontSize="sm" mt={1.5}>Currently working at {" "}
                        <Link href="https://www.trustly.net/us" isExternal color="#0ee06e">
                            <TextBold>Trustly</TextBold>
                        </Link>
                        .
                    </Text>
                    <Text fontSize="sm" mt={1}>
                        In my current job, I use <TextBold>java and web scraping techniques</TextBold>, but I've worked a lot
                        with <TextBold>Laravel</TextBold>, <TextBold>NodeJS</TextBold> and
                        <TextBold> React</TextBold>.
                    </Text>
                    <Text fontSize="sm" mt={1}>
                        I also had a little experience with Vue.JS, Gatsby, NextJS and Gitlab CI.
                    </Text>
                    <Spacer/>
                    <Stack direction="row" spacing={3}>.
                        <Tooltip hasArrow label="I'm working on it..." bg="gray.700" color="white">
                            <Button leftIcon={<ImBlog/>} variant="outline" fontSize="2md">
                                Blog
                            </Button>
                        </Tooltip>
                        <Link href="https://www.linkedin.com/in/igordeeoliveira/" isExternal>
                            <Button leftIcon={<AiFillLinkedin/>}  variant="outline" fontSize="2md">
                                LinkedIn
                            </Button>
                        </Link>
                        <Link href="https://github.com/IgordeOliveira" isExternal>
                            <Button leftIcon={<AiOutlineGithub/>}  variant="outline" fontSize="2md">
                                Github
                            </Button>
                        </Link>
                    </Stack>
                </Flex>
            </SimpleGrid>
        </Center>
    )
}
