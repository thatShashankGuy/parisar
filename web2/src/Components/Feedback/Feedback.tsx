import './Feedback.css'
import { TextField, Button } from '@mui/material';
import success from '../../assets/relaxation.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-regular-svg-icons';
import Service404 from '../Shared/Service404';
import { useState } from 'react';
const Feedback = () => {
  const [show404, setShow404] = useState(false)

  function submitFeedBack(){
    setShow404(true)
  }

  return (
  <div>
    <div className='feedback-container'>
    <div className='success'>
        <img src={success} alt={"Image not Found"} />
    </div>
    {
  show404? 
  <Service404 component='feedback'/>
  :<form  noValidate autoComplete="off">
    <h1>Thank you for Visting!</h1>
      <h4>
      <FontAwesomeIcon icon={faMessage} /> We will love some feedback . Fill the form or <a href="mailto:shashankforworkshekhar@gmail.com">Email  Directly</a>
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
     <Button variant="contained" type="submit" onClick={()=>submitFeedBack()}>Submit</Button> 
    </form>
}
    </div>
    </div>
  );
}

export default Feedback;
