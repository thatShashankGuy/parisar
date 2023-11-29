import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimney, faDiagramProject, faTimeline, faComments, faAddressCard, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import { modeProps } from '../../Constants/Types';
import useMediaQuery from '@mui/material/useMediaQuery';

const Navbar: React.FC<modeProps> = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  return (
    <div style={{ position: 'fixed', bottom: 3, left: 0, right: 0, width: '100%', zIndex: 100 }}>
      <Paper sx={{ opacity: 0.7, boxShadow: 'none' }} elevation={3}>
        <BottomNavigation showLabels>
          <BottomNavigationAction component={Link} to='/' label="Home" icon={<FontAwesomeIcon icon={faHouseChimney} size='lg' />} />
          <BottomNavigationAction component={Link} to='/about' label="About Me" icon={<FontAwesomeIcon icon={faAddressCard} size='lg' />} />
         { !isMobile && <BottomNavigationAction component={Link} to='/career' label="Career Timeline" icon={<FontAwesomeIcon icon={faTimeline} size='lg' />} />}
          <BottomNavigationAction component={Link} to='/audio' label="The half byte broadcast" icon={<FontAwesomeIcon icon={faHeadphones} size='lg' />} />
          <BottomNavigationAction component={Link} to='/project' label="_InSights Project" icon={<FontAwesomeIcon icon={faDiagramProject} size='lg' />} />
         { !isMobile && <BottomNavigationAction component={Link} to='/feedback' label="Feedback" icon={<FontAwesomeIcon icon={faComments} size='lg' />} />}
      
        </BottomNavigation>
      </Paper>
    </div>
  );
};

export default Navbar;
