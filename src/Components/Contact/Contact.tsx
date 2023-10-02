import { useEffect, useState } from "react";
import "./Contact.css";
import ContacForm from "./Private/ContactForm";
import ThankYouPage from "./Private/ThankYouPage";
import { Helmet } from 'react-helmet'
import {callEmailService} from '../../Services/APIservice'
import { IResponse,IFormData } from "../../Services/InterfaceService";

export default function Contact() {
  const [querySubmission ,setQuerySubmission] = useState(false)

  const handleSubmission =async (formData : IFormData) =>{
    let response : IResponse;
    try {
      response = await callEmailService(formData);
      if(!response.error){
        setQuerySubmission(true)
      }else{
        console.log(response)
        setQuerySubmission(false)
      }
    } catch (error) {
      console.log(error);
      setQuerySubmission(false)
    }
  }

  return (
    <>
       <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="contact-container">
        {!querySubmission ? (
          <h1>Contact Us</h1>
        ) : (
          <h1>Thank You for Choosing Our Service</h1>
        )}
        <div className="contact-info">
          <div className="mailbox">
            {!querySubmission ? (
              <section>
                <h2>Mailbox</h2>
                <p>
                  Please share your query by filling out the form below, or feel
                  free to get in touch via email at 
                  <a href="mailto:shashankforworkshekhar@gmail.com">
                    {" "}shashankforworkshekhar@gmail.com
                  </a>
                  .
                </p>
                <p>{"  "}</p>
                <section className="form-section">
                  <ContacForm 
                    handleSubmissionFromParent ={handleSubmission}
                  />
                </section>
              </section>
            ) : (
              <section>
                <ThankYouPage
                  success = {true}
                />
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
