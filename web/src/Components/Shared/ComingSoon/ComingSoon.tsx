import { faHammer, faFaceGrinBeamSweat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Helmet } from 'react-helmet'
import './ComingSoon.css'; 

interface PageSpecific {
    name : string
}
export default function ComingSoon(props :PageSpecific) {
  return (
    <div className="coming-soon">
      <Helmet>
        <title>{props.name}</title>
      </Helmet>
      <h1>Coming Soon!!</h1>

    <section>
      <a><FontAwesomeIcon icon={faHammer}  size="6x" /> </a>
      </section>
      <section>
        <br />
        <br />
      <p>Our {props.name} section is still construction {"  "}
     <FontAwesomeIcon icon={faFaceGrinBeamSweat} size="1x"/>
        . Please revisit in sometime!{"    "}  
    </p>
    </section>
    </div>
  );
};


