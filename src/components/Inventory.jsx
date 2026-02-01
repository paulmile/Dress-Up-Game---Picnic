import { Box, Image, Carousel, IconButton, Icon } from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const Inventory = ({ items, type, onSelect }) => {
    return (
        <Box>
            <Carousel.Root slideCount={items.length} maxW="2xl" gap="4">
                <Carousel.Control justifyContent="center" gap="4" width="full">
                    <Carousel.PrevTrigger asChild>
                        <IconButton size="sm" variant="outline" color="purple.400" _hover={{ bg: "purple.100" }}>
                            <Icon as={FiArrowLeft} />
                        </IconButton>
                    </Carousel.PrevTrigger>

                    
                    <Carousel.ItemGroup width="full">
                        {items.map((item, index) => (
                            <Carousel.Item key={index} index={index} maxBlockSize="100px" display="flex" alignItems="center" justifyContent="center">
                                <Box as="button" onClick={() => {
                                    if (typeof onSelect === 'function') {
                                        onSelect(item, type);
                                    }
                                }}>
                                <Image
                                maxBlockSize="100px" 
                                display="flex" 
                                alignItems="center" 
                                justifyContent="center"
                                    width="100%"
                                    height="100%"
                                    src={item.thumbnail}
                                    alt={item.name}
                                    objectFit="scale-down"
                                />
                                </Box>
                            </Carousel.Item>
                        ))}
                    </Carousel.ItemGroup>


                    <Carousel.NextTrigger asChild>
                        <IconButton size="sm" variant="outline" color="purple.400" _hover={{ bg: "purple.100" }}>
                            <Icon as={FiArrowRight} />
                        </IconButton>
                    </Carousel.NextTrigger>
                </Carousel.Control>
            </Carousel.Root>
        </Box>
    );
}

export default Inventory;