import { useEffect } from "react"
import catapult from "./catapult"
import { Container } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
const Animation = ()=>{
    const theme = useTheme();
    const isMobile  = useMediaQuery(theme.breakpoints.down('sm'));
    useEffect(()=>{
       const inst =  catapult();

       return () => {
        if(inst){
            inst.destroy();
        }
       }
    },[])
    return (
        <>
        <Container  style={{ padding: isMobile ? '8px' : '24px' }} id="animation-block">
                 {/* /*to host catapult/* */}
        </Container>
        </>
    )
}

export default Animation

