import success from '../../assets/welcome.svg';
import Animation from './Animation';
import { Grid, Box, } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
const Landing = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center" className="landing-grid">
      {!isMobile ? <Grid item xs={4}>
        <Box className='success' display="flex" justifyContent="center" p={5}>
          <img src={success} alt="Welcome" style={{ width: '100%', maxWidth: '360px', height: 'auto' }} />
        </Box>
      </Grid> : 
       <Grid item lg={4}>
       <Box className='success' display="flex" justifyContent="center" p={5}>
         <img src={success} alt="Welcome" style={{ width: '100%',  height: 'auto' }} />
       </Box>
     </Grid>
      
      }
      {
        !isMobile && <Grid item xs={8}>
          <Animation />
        </Grid>
      }

    </Grid>
  );
};

export default Landing;
