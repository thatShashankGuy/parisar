import React, { useState } from 'react';
import './ContactForm.css';
import { IContactForm, IFormData } from '../../../Services/InterfaceService';
import { TextField, Button } from '@mui/material';
import { red } from '@mui/material/colors';

const ContactForm = (props: IContactForm) => {
  const { handleSubmissionFromParent } = props;

  const initialFormData: IFormData = {
    query: "",
    email: "",
  };

  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false); // New state to track form submission

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (formData.query && formData.email) { 
      handleSubmissionFromParent(formData);
      setFormSubmitted(false);
    }
  };

  const inputStyle = (fieldValue: string) => {
    return formSubmitted && !fieldValue ? { borderColor: red[500] } : {};
  };

  return (
    <form onSubmit={handleSubmit} noValidate autoComplete="off">
      <h4>
        Fill the form or <a href="mailto:shashankforworkshekhar@gmail.com">Email  Directly</a>
      </h4>
      {/* Apply conditional styles based on whether the input is empty and the form has been submitted */}
      <TextField
        name="query"
        onChange={handleInputChange}
        id="standard-multiline-static"
        label="Query"
        placeholder="Press Enter for next line"
        multiline
        variant="standard"
        style={inputStyle(formData.query)}
        required
      />
      <br />
      <br />
      <TextField 
        name="email"
        onChange={handleInputChange}
        id="filled-basic"
        label="Email Address"
        placeholder="Please provide your Email For contact"
        variant="standard"

        style={inputStyle(formData.email)}
        required
      />
      <br />
      <br />
      <Button variant="contained" type="submit">Submit</Button>
    </form>
  );
}

export default ContactForm;
