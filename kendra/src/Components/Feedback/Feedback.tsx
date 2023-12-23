import  { useState } from 'react';
import { TextField, Button, Grid, Typography, Box, Container, useMediaQuery } from '@mui/material';
import relax from '../../assets/relaxation.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import { faMeteor } from '@fortawesome/free-solid-svg-icons';
import Service404 from '../Shared/Service404';
import { URLS } from '../../config';


const Feedback = () => {
  const [show404, setShow404] = useState(false);
  const [comment,setComment] = useState("");
  const [email,setEmail] = useState("");
  const [show200,setShow200] = useState(false)
  const [errors,setErrors] = useState({comment:false, email:false})
  const isMobile = useMediaQuery('(max-width:600px)');
  const validateFields = () => {
    const newErrors = {
      comment : false,
      email : false
    };
    newErrors.comment = !comment;
    newErrors.email = !email || !/\S+@\S+\.\S+/.test(email);
    setErrors(newErrors);

    return !newErrors.comment && !newErrors.email;
};


  const submitFeedBack = async () => {
    if(!validateFields()){

        throw new Error("empty fields")
    }
        const response = await fetch(URLS.Feedback,{
          method:"POST",
          headers:{
            "Content-Type" :"application/json"
          },
          body:JSON.stringify({
            email : email,
            comment : comment,
            source : "kendra feedback"
          })
        })

       if(!response.ok){
          setComment("")
          setEmail("")
          setShow404(true)
       }else{
          setComment("")
          setEmail("")
          setShow200(true)
       }

  };

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          {!isMobile ? <Grid item xs={12} md={6}>
            <img src={relax} alt="Relaxation" style={{ maxWidth: '100%', height: 'auto' }} />
          </Grid> : null}
          <Grid item xs={12} md={6}>
            {show404 ? (
              <Service404 component='feedback' />
            ) : (
              <Box>
                {!show200 ?<>
                  <Typography variant="h4" gutterBottom>
                  Thank you for Dropping By! <FontAwesomeIcon icon={faMeteor} />
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  <FontAwesomeIcon icon={faMessage} /> I would love some feedback. Fill the form or <a href="mailto:shashankforworkshekhar@gmail.com">Email Directly</a>
                </Typography>
                </> : <> <Typography variant="h4" gutterBottom>
                  Thank you for your feedback <FontAwesomeIcon icon={faMeteor} />
                </Typography>
                 <Typography variant="subtitle1" gutterBottom>
                 <FontAwesomeIcon icon={faMessage} /> Add another feedback or <a href="mailto:shashankforworkshekhar@gmail.com">Email Directly</a>
               </Typography> </> 
                }
                <form noValidate autoComplete="off">
                  <TextField
                    fullWidth
                    name="query"
                    error={errors.comment}
                    id="standard-multiline-static"
                    label="Submit your Feedback"
                    helperText={errors.comment ? "Comment is required" : ""}
                    value={comment}
                    placeholder="Press Enter for next line"
                    multiline
                    rows={4}
                    variant="standard"
                    margin="normal"
                    onChange={(e)=>setComment(e.target.value)}
                    required
                  />
                  <TextField 
                    fullWidth
                    error={errors.email}
                    helperText={errors.email ? "Please provide a valid Email" : ""}
                    value={email}
                    name="email"
                    id="filled-basic"
                    label="Email Address"
                    placeholder="Please provide your Email"
                    variant="standard"
                    margin="normal"
                    onChange={(e)=>setEmail(e.target.value)}
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
