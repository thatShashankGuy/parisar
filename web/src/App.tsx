import './App.css'
import ModeSetter from './Components/Shared/ModeSetter';
import Main from './Components/Main';
import Socials from './Components/Shared/Socials';
import Navbar from './Components/Shared/Navbar';

import { useLocation } from 'react-router';

function App() {
  const location = useLocation();

  const isPlayerRoute = location.pathname === '/player';
  return (
    <> 
      <ModeSetter>
      {!isPlayerRoute && (
        <section className="socials">
          <Socials darkMode={true} />
        </section>)}
        <section className='content'>
        <Main />
        </section>
        {!isPlayerRoute && (
          <footer className="navbar">
            <Navbar darkMode={true}/>
          </footer>
        )}
      </ModeSetter>
    </>
  )
}

export default App
