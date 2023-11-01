import './Feedback.css'
import { TextField, Button } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import WavingHandOutlinedIcon from '@mui/icons-material/WavingHandOutlined';

const Feedback = () => {

  return (
  <div>
    <div className='feedback-container'>
  
    <form  noValidate autoComplete="off">
    <h1>Thank you for Visting!<WavingHandOutlinedIcon/></h1>
      <h4>
      <FeedbackIcon/> We will love some feedback . Fill the form or <a href="mailto:shashankforworkshekhar@gmail.com">Email  Directly</a>
      </h4>
      {/* Apply conditional styles based on whether the input is empty and the form has been submitted */}
      <TextField
        name="query"
     //   onChange={}
        id="standard-multiline-static"
        label="Submit your Feedback"
        placeholder="Press Enter for next line"
        multiline
        variant="standard"
       // style={inputStyle(formData.query)}
        required
      />
      <br />
      <br />
      <TextField 
        name="email"
      //  onChange={handleInputChange}
        id="filled-basic"
        label="Email Address"
        placeholder="Please provide your Email"
        variant="standard"

        //style={inputStyle(formData.email)}
        required
      />
      <br />
      <br />
     <Button variant="contained" type="submit">Submit</Button> 
    </form>
    </div>
    </div>
  );
}

export default Feedback;
