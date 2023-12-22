
import success from '../../assets/welcome.svg';
import second from '../../assets/photographer.svg'
import third from '../../assets/summer.svg'
import { Grid, Box, Typography } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Landing = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center" className="landing-grid">
      {!isMobile ? <Grid item xs={5}>
      
        <Box className='success' display="flex" justifyContent="center" p={4}>
          <img src={second} alt="Welcome" style={{ width: '100%', maxWidth: '360px', height: 'auto' }} />
        </Box>
        <Typography variant='body1' sx={{paddingLeft:"30%",color:"grey"}}>Hi I am Shashank and this is my one stop shop for all my projects
        <FontAwesomeIcon icon={faMeteor} />
        </Typography>
      </Grid> :
        <Grid item lg={4}>
          <Box className='success' display="flex" justifyContent="center" p={5}>
            <img src={success} alt="Welcome" style={{ width: '100%', height: 'auto' }} />
          </Box>
         
        </Grid>

      }
      {
        !isMobile && <><Grid item lg={4}>
         <Box className='success' display="flex" justifyContent="center" p={5}>
          <img src={success} alt="Welcome" style={{ width: '100%', maxWidth: '360px', height: 'auto' }} />
        </Box>
        <Typography variant='body1' sx={{paddingLeft:"30%",color:"grey"}}>
          Checkout <strong>Vartalap </strong>
        and know more open source project  <strong>Nibandh</strong>
        <FontAwesomeIcon icon={faMeteor} />
        </Typography>
        </Grid>
        <Grid item xs={3}>
        <Box className='success' display="flex" justifyContent="center" p={5}>
          <img src={third} alt="Welcome" style={{ width: '100%', maxWidth: '360px', height: 'auto' }} />
        </Box>
        <Typography variant='body1' sx={{paddingLeft:"30%",color:"grey"}}>
          Come back to see  what I am working on next.
          <FontAwesomeIcon icon={faMeteor} />
          </Typography>
      </Grid>
      </>
      }

    </Grid>
  );
};

export default Landing;
