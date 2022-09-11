import { 
    Flex,
    useBreakpointValue
} from "@chakra-ui/react";

const Sidebar = (props) => {
    const width = useBreakpointValue({base: "100%", sm: "180px"});

    return <Flex
    width={width}
    bgColor="blue.100"
    height="100vh"
    >

    </Flex>;
};

export default Sidebar;