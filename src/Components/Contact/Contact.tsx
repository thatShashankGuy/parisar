import { useEffect } from "react";
import "./Contact.css";
import ContacForm from "./Private/ContactForm";
import ThankYouPage from "./Private/ThankYouPage";
import { Helmet } from 'react-helmet'
export default function Contact() {
  let init = false;
  useEffect(()=>{
    
  })
  return (
    <>
       <Helmet>
        <title>Contact</title>
      </Helmet>
      <div className="contact-container">
        {init ? (
          <h1>Contact Us</h1>
        ) : (
          <h1>Thank You for Choosing Our Service</h1>
        )}
        <div className="contact-info">
          <div className="mailbox">
            {init ? (
              <section>
                <h2>Mailbox</h2>
                <p>
                  Please share your query by filling out the form below, or feel
                  free to get in touch via email at
                  <a href="mailto:shashankforworkshekhar@gmail.com">
                    shashankforworkshekhar@gmail.com
                  </a>
                  .
                </p>
                <p>{"  "}</p>
                <section className="form-section">
                  <ContacForm />
                </section>
              </section>
            ) : (
              <section>
                <ThankYouPage
                  success = {false}
                />
              </section>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
