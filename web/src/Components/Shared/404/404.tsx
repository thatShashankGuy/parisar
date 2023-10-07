import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './404.css'; 

import { faBan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function _404 () {
  return (
    <div className="_404">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>Go back to <Link to="/"><a><b>Home</b></a>.
      </Link>
      <p><FontAwesomeIcon icon={faBan}  size="6x"/></p>
    </div>
  );
};


