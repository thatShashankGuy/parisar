import  { useState } from 'react';
import { TextField, Button, Grid, Typography, Box, Container } from '@mui/material';
import relax from '../../assets/relaxation.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import Service404 from '../Shared/Service404';


const Feedback = () => {
  const [show404, setShow404] = useState(false);
  const submitFeedBack = () => {
    setShow404(true);
  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6}>
            <img src={relax} alt="Relaxation" style={{ maxWidth: '100%', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} md={6}>
            {show404 ? (
              <Service404 component='feedback' />
            ) : (
              <Box>
                <Typography variant="h4" gutterBottom>
                  Thank you for Dropping By! <FontAwesomeIcon icon={faMeteor} />
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  <FontAwesomeIcon icon={faMessage} /> We would love some feedback. Fill the form or <a href="mailto:shashankforworkshekhar@gmail.com">Email Directly</a>
                </Typography>
                <form noValidate autoComplete="off">
                  <TextField
                    fullWidth
                    name="query"
                    id="standard-multiline-static"
                    label="Submit your Feedback"
                    placeholder="Press Enter for next line"
                    multiline
                    rows={4}
                    variant="standard"
                    margin="normal"
                    required
                  />
                  <TextField 
                    fullWidth
                    name="email"
                    id="filled-basic"
                    label="Email Address"
                    placeholder="Please provide your Email"
                    variant="standard"
                    margin="normal"
                    required
                  />
                  <Box mt={2}>
                    <Button variant="contained" onClick={submitFeedBack}>Submit</Button> 
                  </Box>
                </form>
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Feedback;
