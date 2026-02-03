import { Box, Flex, Carousel, IconButton, Icon, Image, Button } from "@chakra-ui/react";
import { FiArrowLeft, FiArrowRight, FiCamera } from "react-icons/fi";
import Inventory from "../components/Inventory";
import Doll from "../components/Doll";
import { useState, useRef } from "react";
import bg from '../assets/bg3.png';
import bgMain from '../assets/bg_main.png';
import html2canvas from 'html2canvas';
const MainPage = () => {

    const skintones = 
    [
        { name: 'light', src: require('../assets/skin/skin_light.png'), w: 200, h: 400 },
        { name: 'medium', src: require('../assets/skin/skin_med.png'), w: 200, h: 400 },
        { name: 'dark', src: require('../assets/skin/skin_dark.png'), w: 200, h: 400 },
    ];

    const faces = 
    [
        {name: 'happy', src: require('../assets/face_1.png'), w: 200, h: 400},
    ];

    const hairstyles = [
        { name: 'hair1', src: require('../assets/hair/hair_1.png'), thumbnail: require('../assets/hair/hair_1_thumbnail.png') , w: 200, h: 400 },
        { name: 'hair2', src: require('../assets/hair/hair_2.png'), thumbnail: require('../assets/hair/hair_2_thumbnail.png') , w: 200, h: 400 },
        { name: 'hair3', src: require('../assets/hair/hair_3.png'), thumbnail: require('../assets/hair/hair_3_thumbnail.png') , w: 200, h: 400 },
        { name: 'hair4', src: require('../assets/hair/hair_4.png'), thumbnail: require('../assets/hair/hair_4_thumbnail.png') , w: 200, h: 400 },
        { name: 'hair5', src: require('../assets/hair/hair_5.png'), thumbnail: require('../assets/hair/hair_5_thumbnail.png') , w: 200, h: 400 },
        { name: 'hair6', src: require('../assets/hair/hair_6.png'), thumbnail: require('../assets/hair/hair_6_thumbnail.png') , w: 200, h: 400 },
    ];

    
     const tops = [
        { name: 'top1', src: require('../assets/torso/top_1.png'), thumbnail: require('../assets/torso/top_1_thumbnail.png') , w: 200, h: 400 },
        { name: 'top2', src: require('../assets/torso/top_2.png'), thumbnail: require('../assets/torso/top_2_thumbnail.png') , w: 200, h: 400 },
        { name: 'top3', src: require('../assets/torso/top_3.png'), thumbnail: require('../assets/torso/top_3_thumbnail.png') , w: 200, h: 400 },
        { name: 'top4', src: require('../assets/torso/top_4.png'), thumbnail: require('../assets/torso/top_4_thumbnail.png') , w: 200, h: 400 },
        { name: 'top5', src: require('../assets/torso/top_5.png'), thumbnail: require('../assets/torso/top_5_thumbnail.png') , w: 200, h: 400 },
        { name: 'top6', src: require('../assets/torso/top_6.png'), thumbnail: require('../assets/torso/top_6_thumbnail.png') , w: 200, h: 400 },
        { name: 'top7', src: require('../assets/torso/top_7.png'), thumbnail: require('../assets/torso/top_7_thumbnail.png') , w: 200, h: 400 },
        { name: 'top8', src: require('../assets/torso/top_8.png'), thumbnail: require('../assets/torso/top_8_thumbnail.png') , w: 200, h: 400 },
        { name: 'top9', src: require('../assets/torso/top_9.png'), thumbnail: require('../assets/torso/top_9_thumbnail.png') , w: 200, h: 400 },
        { name: 'top10', src: require('../assets/torso/top_10.png'), thumbnail: require('../assets/torso/top_10_thumbnail.png') , w: 200, h: 400 },
    ];

     const legs = [
        { name: 'legs1', src: require('../assets/legs/legs_1.png'), thumbnail: require('../assets/legs/legs_1_thumbnail.png'), w: 200, h: 400 },
        { name: 'legs2', src: require('../assets/legs/legs_2.png'), thumbnail: require('../assets/legs/legs_2_thumbnail.png'), w: 200, h: 400 },
        { name: 'legs3', src: require('../assets/legs/legs_3.png'), thumbnail: require('../assets/legs/legs_3_thumbnail.png'), w: 200, h: 400 },
        { name: 'legs4', src: require('../assets/legs/legs_4.png'), thumbnail: require('../assets/legs/legs_4_thumbnail.png'), w: 200, h: 400 },
        { name: 'legs5', src: require('../assets/legs/legs_5.png'), thumbnail: require('../assets/legs/legs_5_thumbnail.png'), w: 200, h: 400 },
        { name: 'legs6', src: require('../assets/legs/legs_6.png'), thumbnail: require('../assets/legs/legs_6_thumbnail.png'), w: 200, h: 400 },
        { name: 'legs7', src: require('../assets/legs/legs_7.png'), thumbnail: require('../assets/legs/legs_7_thumbnail.png'), w: 200, h: 400 },
        { name: 'legs8', src: require('../assets/legs/legs_8.png'), thumbnail: require('../assets/legs/legs_8_thumbnail.png'), w: 200, h: 400 },
        { name: 'legs9', src: require('../assets/legs/legs_9.png'), thumbnail: require('../assets/legs/legs_9_thumbnail.png'), w: 200, h: 400 },
        { name: 'legs10', src: require('../assets/legs/legs_10.png'), thumbnail: require('../assets/legs/legs_10_thumbnail.png'), w: 200, h: 400 },
        
        
    ];

    const shoes = [
        { name: 'shoe1', src: require('../assets/feet/shoes_1.png'), thumbnail: require('../assets/feet/shoes_1_thumbnail.png'), w: 200, h: 400 },
        { name: 'shoe2', src: require('../assets/feet/shoes_2.png'), thumbnail: require('../assets/feet/shoes_2_thumbnail.png'), w: 200, h: 400 },
        { name: 'shoe3', src: require('../assets/feet/shoes_3.png'), thumbnail: require('../assets/feet/shoes_3_thumbnail.png'), w: 200, h: 400 },
        { name: 'shoe4', src: require('../assets/feet/shoes_4.png'), thumbnail: require('../assets/feet/shoes_4_thumbnail.png'), w: 200, h: 400 },
        { name: 'shoe5', src: require('../assets/feet/shoes_5.png'), thumbnail: require('../assets/feet/shoes_5_thumbnail.png'), w: 200, h: 400 },
        { name: 'shoe6', src: require('../assets/feet/shoes_6.png'), thumbnail: require('../assets/feet/shoes_6_thumbnail.png'), w: 200, h: 400 },
    ];

    
const dollRef = useRef(null);

async function saveDollHtml2Canvas() {
  try {
    if (!dollRef.current) throw new Error('dollRef not set');
    console.log('capture start', dollRef.current);
    const canvas = await html2canvas(dollRef.current, {
      backgroundColor: null,
      useCORS: true,
      logging: true,
    });
    console.log('captured canvas', canvas.width, canvas.height);
    if (canvas.width === 0 || canvas.height === 0) {
      throw new Error('Captured canvas has zero size — wrong ref or hidden element');
    }
    canvas.toBlob((blob) => {
      if (!blob) {
        console.error('toBlob returned null');
        return alert('Export failed: empty blob');
      }
      console.log('blob size', blob.size);
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'doll.png';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      console.log('download triggered');
    }, 'image/png');
  } catch (err) {
    console.error('capture failed', err);
    alert('Export failed: ' + (err?.message ?? err));
  }
}

    const [overlays, setOverlays] = useState({});
    const [skintone, setSkintone] = useState();
    const [zCounter, setZCounter] = useState(1);

    function handleOverlay(item, type) {
        if (!item) return;
        setOverlays(prev => {
            const existing = prev[type];
            if (existing && existing.src === item.src) {
                const next = { ...prev };
                delete next[type];
                return next;
            }
            const withZ = { ...item, _z: zCounter };
            setZCounter(zCounter + 1);
            return { ...prev, [type]: withZ };
        });
    }

    function handleSkintone(tone){
        if (!tone) return setSkintone(undefined);
        if (typeof tone === 'string') {
            const s = skintones.find(s => s.name === tone);
            setSkintone(s);
        } else {
            setSkintone(tone);
        }
    }

    return (
        <Box position="absolute" backgroundImage={`url(${bgMain})`} border="4px" borderStyle={'dotted'} borderColor={'orange.500'} borderRadius="md">
            <Flex height="600px" width="800px" borderRadius="md" border="dashed" borderColor={'green.500'} margin="10px" padding="10px" gap="10px" flexDirection="row" >
                { /* Left Side */}
                <Box
                    backgroundImage={`url(${bg})`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    height="100%"
                    width="60vw"
                    position="relative"
                    borderRadius="md"
                    ref={dollRef}
                >
                    <Box position="absolute" top="8px" right="8px" display="flex" flexDirection="column" gap="8px" zIndex={50}>
                        {/* show simple round color swatches for skintones */}
                        {(() => {
                            const toneColors = { light: '#f8e0d8', medium: '#d7a57a', dark: '#8d5524' };
                            return skintones.map((s) => {
                                const color = toneColors[s.name] ?? '#cccccc';
                                const isSelected = skintone?.name === s.name;
                                return (
                                    <Button
                                        key={s.name}
                                        data-html2canvas-ignore
                                        onClick={() => handleSkintone(s)}
                                        size="sm"
                                        variant={isSelected ? 'solid' : 'outline'}
                                        p={0}
                                        width="28px"
                                        height="28px"
                                        minW="28px"
                                        borderRadius="full"
                                        bg={isSelected ? color : 'transparent'}
                                        borderColor={isSelected ? color : 'gray.300'}
                                        aria-label={`skin-${s.name}`}
                                    >
                                        <Box width="100%" height="100%" borderRadius="full" bg={color} />
                                    </Button>
                                );
                            });
                        })()}
                    </Box>
                    <Doll
                        skintone={skintone ? skintone : skintones[0]}
                        face={faces[0]}
                        hairstyle={overlays.head}
                        top={overlays.torso}
                        legs={overlays.legs}
                        shoes={overlays.feet}
                    />
                    <Button data-html2canvas-ignore position="absolute" bottom="8px" right="8px" onClick={saveDollHtml2Canvas} variant="subtle" color="purple.500" size="sm">Save</Button>

                    
                </Box>
                { /* Right Side */}
                <Box  paddingTop={"5px"} paddingBottom={"5px"} height="100%" width="40vw">
                    
                    <Flex flexDirection="column" height="100%" width="100%" gap="5px" alignItems="center">

                        <Box padding="5px" bg="white" borderRadius={"md"} shadow={"lg"} height="100%" width="90%" display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                            <Box background="white" height="90%" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                                <Inventory items={hairstyles} type="head" onSelect={(it, type) => handleOverlay(it, type)} />
                            </Box>
                        </Box>
                        <Box padding="5px" bg="white" borderRadius={"md"} shadow={"lg"} height="100%" width="90%" display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                            <Box background="white" height="90%" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                                <Inventory items={tops} type="torso" onSelect={(it, type) => handleOverlay(it, type)} />
                            </Box>
                        </Box>
                        <Box padding="5px" bg="white" borderRadius={"md"} shadow={"lg"} height="100%" width="90%" display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                            <Box background="white" height="90%" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                                <Inventory items={legs} type="legs" onSelect={(it, type) => handleOverlay(it, type)} />
                            </Box>
                        </Box>
                        <Box  padding="5px" bg="white" borderRadius={"md"} shadow={"lg"} height="100%" width="90%" display="flex" flexDirection="row" alignItems="center" justifyContent="center">
                            <Box background="white" height="90%" display="flex" flexDirection="row" alignItems="center" justifyContent="space-between">
                                <Inventory items={shoes} type="feet" onSelect={(it, type) => handleOverlay(it, type)} />
                            </Box>
                        </Box>
                        
                    </Flex>
                    
                </Box>
            </Flex>
        </Box>
    );
}

export default MainPage;