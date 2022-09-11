import { Flex, Text, Heading } from "@chakra-ui/react";
import Sidebar from "./components/Sidebar.js";

function App() {
    return <Flex
    flexDir="row"
    height="100%"
    width="100%"
    >
        <Sidebar/>
    </Flex>
}

export default App;