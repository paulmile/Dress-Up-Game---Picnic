import { Box, Button, Flex, Image } from "@chakra-ui/react";
import bgMain from "../assets/bg_main.png";

const WelcomePage = ({ onStart }) => {
    return (
        <Box padding="10px" position="absolute" backgroundImage={`url(${bgMain})`} border="4px" borderStyle={'dotted'} borderColor={'orange.500'} borderRadius="md">
            <Flex height="590px" width="790px" borderRadius="md" border="dashed" borderColor={'green.500'} margin="10px" padding="10px" gap="10px" flexDirection="column" justifyItems="center" placeItems={"center"}>
                <Image border="4px" borderStyle="dotted" borderColor="pink.300" marginTop="20%" boxSize="200px" src={require("../assets/welcome_img.png")} alt="Welcome Image" />
                <Button variant="subtle" color="orange.500" fontSize={"24px"} onClick={() => onStart && onStart()}>Play</Button>
            </Flex>
            
        </Box>
    );
};
    
export default WelcomePage;