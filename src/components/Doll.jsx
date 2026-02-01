import { Box, Image } from "@chakra-ui/react";

const anchors = [
    { name: "head", x: "0%", y: "0%", z: 1 },
    { name: "torso", x: "0%", y: "0%", z: 4 },
    { name: "legs", x: "0.07%", y: "0%", z: 4 },
    { name: "feet", x: "0%", y: "0%", z: 2 },
];

const getAnchor = (name) => anchors.find((a) => a.name === name) || { x: "0%", y: "0%", z: 0 };

const CenteredImage = ({ src, alt, zIndex, anchorX = "0%", anchorY = "0%" }) => (
    <Image
        src={src}
        alt={alt}
        position="absolute"
        left="50%"
        top="50%"
        transform={`translate(-50%, -50%) translate(${anchorX}, ${anchorY})`}
        zIndex={zIndex}
        objectFit="contain"
        maxH="100%"
        maxW="100%"
        pointerEvents="none"
    />
);

const Doll = ({ skintone, face, hairstyle, top, legs: legsProp, shoes: shoesProp }) => {
    const outlineZ = 1;

    return (
        <Box position="absolute" top="0" left="0" right="0" bottom="0" display="flex" alignItems="center" justifyContent="center">
            {skintone && <CenteredImage src={skintone.src} alt={skintone.name} zIndex={0} />}

            <CenteredImage src={require("../assets/body_outline_transparent.png")} alt="doll-outline" zIndex={outlineZ} />

            {face && (() => {
                const a = getAnchor("head");
                return <CenteredImage src={face.src} alt={face.name} zIndex={a.z} anchorX={a.x} anchorY={a.y} />;
            })()}

            {hairstyle && (() => {
                const a = getAnchor("head");
                return <CenteredImage src={hairstyle.src} alt={hairstyle.name} zIndex={a.z} anchorX={a.x} anchorY={a.y} />;
            })()}


            {top && (() => {
                const a = getAnchor("torso");
                const z = top._z ? top._z : a.z + 1;
                return <CenteredImage src={top.src} alt={top.name} zIndex={z} anchorX={a.x} anchorY={a.y} />;
            })()}

            {legsProp && (() => {
                const a = getAnchor("legs");
                const z = legsProp._z ? legsProp._z : a.z + 1;
                return <CenteredImage src={legsProp.src} alt={legsProp.name} zIndex={z} anchorX={a.x} anchorY={a.y} />;
            })()}

            {shoesProp && (() => {
                const a = getAnchor("feet");
                return <CenteredImage src={shoesProp.src} alt={shoesProp.name} zIndex={a.z} anchorX={a.x} anchorY={a.y} />;
            })()}
        </Box>
    );
};

export default Doll;