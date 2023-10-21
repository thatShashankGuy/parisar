import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './404.css'; 

import { faBan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

type Imisc = {
  suspended : boolean
}

export default function _404 (props: Imisc) {
  return (
    props.suspended !== true ?
    <div className="_404">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>Go back to <Link to="/"><a><b>Home</b></a>.
      </Link>
      <p><FontAwesomeIcon icon={faBan}  size="6x"/></p>
    </div> : <div className="_404">
      <h1>404 - Service Suspended </h1>
      <p>This service is suspended at current moment.Please <a href="mailto:shashankforworkshekhar@gmail.com">Email Me  Directly</a></p>Go back to <Link to="/"><a><b>Home</b></a>.
      </Link>
      <p><FontAwesomeIcon icon={faBan}  size="6x"/></p>
    </div>
  );
};


