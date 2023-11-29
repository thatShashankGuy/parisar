import {  Container, Typography } from "@mui/material";
import {  faMeteor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from '../../assets/avatar.svg'
import Grid from '@mui/material/Grid';
import { AboutMe } from '../../Constants/DataObjects'
import ResumeDownloadButton from "./DownloadResume";
import useMediaQuery from '@mui/material/useMediaQuery';
const About = () => {
    const isMobile = useMediaQuery('(max-width:600px)');
    return (
        <div className="about-section">
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={3}>

                        <img src={avatar} alt="Welcome" style={{ width: !isMobile?"100%":"15%", maxWidth: '360px', height: 'auto' }} />
                        <span style={{ margin: '0 12px' }}></span> 
                        <ResumeDownloadButton/>
                    </Grid>
                    <Grid item lg={9}>
                        <Container>
                            <section>
                                <Typography variant={!isMobile?"h4":"body1"} component={!isMobile?"h1":"p"}>
                                    {AboutMe.heading}<FontAwesomeIcon icon={faMeteor} />
                                </Typography>
                                <Typography variant={!isMobile?"h6":"body2"} component={!isMobile?"h1":"p"}>{AboutMe.P1}</Typography>
                                <Typography variant={!isMobile?"h6":"body2"} component={!isMobile?"h1":"p"}>{AboutMe.P2}</Typography>
                                <Typography variant={!isMobile?"h6":"body2"} component={!isMobile?"h1":"p"}>{AboutMe.P3}</Typography>
                                <Typography variant={!isMobile?"h6":"body2"} component={!isMobile?"h1":"p"}>{AboutMe.P4}</Typography>
                            </section>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default About