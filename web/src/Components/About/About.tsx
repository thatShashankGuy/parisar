import { Container, Typography } from "@mui/material";
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatar from '../../assets/avatar.svg'
import Grid from '@mui/material/Grid';
import { AboutMe } from '../../Constants/DataObjects'

const About = () => {
    return (
        <div className="about-section">
            <Container>
                <Grid container spacing={2}>
                    <Grid item lg={3}>

                        <img src={avatar} alt="Welcome" style={{ width: '100%', maxWidth: '360px', height: 'auto' }} />
                    </Grid>
                    <Grid item lg={9}>
                        <Container>
                            <section>
                                <Typography variant="h4" component="h1">
                                    {AboutMe.heading}<FontAwesomeIcon icon={faMeteor} />
                                </Typography>
                                <Typography variant="h6" component="h1">{AboutMe.P1}</Typography>
                                <Typography variant="h6" component="h1">{AboutMe.P2}</Typography>
                                <Typography variant="h6" component="h1">{AboutMe.P3}</Typography>
                                <Typography variant="h6" component="h1">{AboutMe.P4}</Typography>
                            </section>
                        </Container>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default About