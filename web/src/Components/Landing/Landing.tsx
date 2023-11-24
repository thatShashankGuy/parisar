import success from '../../assets/welcome.svg';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, Box, Typography } from '@mui/material';
import { landing } from '../../Constants/DataObjects';

const Landing = () => {
  const welcomeMessage = landing.message
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center" className="landing-grid">
      <Grid item xs={4}>
        <Box className='success' display="flex" justifyContent="center" p={5}>
          <img src={success} alt="Welcome" style={{ width: '100%', maxWidth: '360px', height: 'auto' }}  />
        </Box>
      </Grid>
      <Grid item xs={8}>
      <Box className="message" textAlign="center" p={5} sx={{
        wordWrap: 'break-word',
        overflowWrap: 'break-word', 
    }}>
      <Typography variant="h5" component="h1" gutterBottom sx={{
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
          wordBreak: 'break-word' 
      }}> Hello, I am <span style={{
        fontFamily: "monospace",
        fontWeight: 'bold',
      }}>Shashank</span>, and welcome to my very elaborate business card.
      <span><FontAwesomeIcon icon={faMeteor} /></span>
    </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Landing;
