import { useCallback } from "react";
import type { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; 

type particleProps ={
    darkMode :boolean
}
const Particle: React.FC<particleProps> = ({darkMode}) => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);
    
    return (
        <Particles
        style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  zIndex: -1, // Set a lower z-index to place it behind other components
        } }
        id="tsparticles"
        init={particlesInit}
        options={ {
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: darkMode ? '#ffffff' : '#333333', 
              },
              links: {
                color: darkMode ? '#ffffff' : '#333333',
                distance: 150,
                enable: true,
                opacity: darkMode ? 0.2 : 0.2, 
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 1, 
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: darkMode ? 0.2 : 0.2, 
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
      />
    );
};

export default Particle