import success from '../../assets/welcome.svg';
import Animation from './Animation';
import { Grid, Box,  } from '@mui/material';

const Landing = () => {
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center" className="landing-grid">
      <Grid item xs={4}>
        <Box className='success' display="flex" justifyContent="center" p={5}>
          <img src={success} alt="Welcome" style={{ width: '100%', maxWidth: '360px', height: 'auto' }}  />
        </Box>
      </Grid>
      <Grid item xs={8}>

        <Animation/>
    
      </Grid>
    </Grid>
  );
};

export default Landing;
