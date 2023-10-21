import "./Portfolio.css";
import ProfilePicture from "../Shared/ProfilePicture/ProfilePicture";
import image from "../../assets/profpic.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngular, faGithub,faGolang,faLinkedin, faNodeJs, faPython, faReact} from "@fortawesome/free-brands-svg-icons";
import DevSection from "./Private/DevSection";
import { Helmet } from 'react-helmet'
import { faMeteor, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <header className="banner">
      
      <Link to="/contact">
        {" "}
        <a target="_blank" rel="noopener noreferrer" className="contact-link">
        <FontAwesomeIcon icon={faCommentDots} />    Contact Me
        </a>
      </Link>
        <ProfilePicture src={image} alt="no image provided" />
        <br />
        <a id="brand-name">@thatshashankguy<FontAwesomeIcon icon={faMeteor} /></a>
        <br />
        <div className="social-links">
          <a href="https://github.com/thatShashankGuy" target="_blank" rel="noopener noreferrer" className="social-links">
          <FontAwesomeIcon icon={faGithub} />
          </a>
          {' '}
          <a href="https://www.linkedin.com/in/thatshashanguy/" target="_blank" rel="noopener noreferrer" className="social-links">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </header>
      <DevSection/>
      <section >
        <br></br>
      <div className="tech-icons">
          <FontAwesomeIcon icon={faNodeJs} size="6x"/>{"  "} 
          <FontAwesomeIcon icon={faGolang} size="6x"/>{"  "} 
          <FontAwesomeIcon icon={faReact} size="6x" />{"  "} 
         <FontAwesomeIcon icon={faAngular} size="6x"/>{"  "} 
          <FontAwesomeIcon icon={faPython} size="6x"/>{"  "} 
        </div>
      </section>
    </div>
  );
}
