import { useState } from "react";
import "./Contact.css";
import ContacForm from "./Private/ContactForm";
import ThankYouPage from "./Private/ThankYouPage";
import { Helmet } from "react-helmet";
import { callSMSService } from "../../Services/APIservice";
import { IResponse, IFormData } from "../../Services/InterfaceService";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Contact() {
  const [querySubmission, setQuerySubmission] = useState(false);

  const handleSubmission = async (formData: IFormData) => {
    let response: IResponse;
    try {
      response = await callSMSService(formData);
      if (!response.error) {
        setQuerySubmission(true);
      } else {
        console.log(response);
        setQuerySubmission(false);
      }
    } catch (error) {
      console.log(error);
      setQuerySubmission(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Link to="/">
        <span  className="home">
        <FontAwesomeIcon icon={faHouse}/> Back to home 
        </span>
      </Link>
      <div className="contact-container">

        {!querySubmission ? (
          <>
        
          </>
        ) : (
          <h1>Thank You for Choosing Our Services.</h1>
        )}
        <div className="contact-info">
            {!querySubmission ? (
              <section className="full-section">
                <p>{"  "}</p>
                <br />
                <section className="form-section">
                  <ContacForm handleSubmissionFromParent={handleSubmission} />
                </section>
              </section>
            ) : (
              <section>
                <ThankYouPage success={true} />
              </section>
            )}
          </div>
      </div>
    </>
  );
}
