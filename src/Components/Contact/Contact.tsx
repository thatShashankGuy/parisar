import "./Contact.css";
import ContacForm from "./Private/ContactForm";
export default function Contact() {
  return (
    <>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-info">
  
          <div className="mailbox">
            <h2>Mailbox</h2>
            <p>
              Please share your query by filling out the form below, or feel
              free to get in touch via email at
              <a href="mailto:shashankforworkshekhar@gmail.com">
                shashankforworkshekhar@gmail.com
              </a>
              .
            </p>
            <p>
              {"  "}
            </p>
            <section className="form-section">
            <ContacForm />
          </section>
          </div>
        </div>
      </div>
    </>
  );
}
