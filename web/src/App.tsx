import './App.css'
import Main from './Components/Main';
import Socials from './Components/Shared/Socials';
import Navbar from './Components/Shared/Navbar';
import ModeSetter from './Components/Shared/ModeSetter';

function App() {
  return (
    <> 
      <ModeSetter>
        <div className="socials">
          <Socials darkMode={true} />
        </div>
        <Main />
        <div className="arrow">
          <Navbar darkMode={true}/>
        </div>
      </ModeSetter>
    </>
  )
}

export default App
