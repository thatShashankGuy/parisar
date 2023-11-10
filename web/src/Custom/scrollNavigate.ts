import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function useScrollNavigation() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const routes = ['/', 'about', '/career', '/blog', '/feedback']; // Your routes array

  // States for tracking touch positions
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchEndY, setTouchEndY] = useState(0);

  // Threshold to determine a swipe
  const verticalThreshold = 50;

  const handleScroll = (event :any) => {
    const direction = event.deltaY > 0 ? 1 : -1;
    navigateToIndex(direction);
  };

  const navigateToIndex = (direction : number) => {
    let nextIndex = (currentIndex + direction + routes.length) % routes.length;
    navigate(routes[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const handleTouchStart = (event : any) => {
    setTouchStartY(event.touches[0].clientY);
    event.preventDefault(); // Prevent default touch event, like scrolling
  };

  const handleTouchMove = (event : any) => {
    setTouchEndY(event.touches[0].clientY);
    event.preventDefault(); // Prevent default touch event, like scrolling
  };

  const handleTouchEnd = () => {
    const distanceY = touchStartY - touchEndY;
    let direction = 0;

    // Downward swipe
    if (distanceY > verticalThreshold) {
      direction = 1; // Go to next route
    }
    // Upward swipe
    else if (distanceY < -verticalThreshold) {
      direction = -1; // Go to previous route
    }

    if (direction !== 0) {
      navigateToIndex(direction);
    }
  };

  const handleKeyPress = (event : any) => {
    let direction = 0;
    if (event.key === 'ArrowDown') {
      direction = 1; // Go to next route
    } else if (event.key === 'ArrowUp') {
      direction = -1; // Go to previous route
    }

    if (direction !== 0) {
      navigateToIndex(direction);
    }
  };

  useEffect(() => {
    const options :any = { passive: false }; // Setting passive to false to enable preventDefault
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleTouchStart, options);
    window.addEventListener('touchmove', handleTouchMove, options);
    window.addEventListener('touchend', handleTouchEnd);
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart, options);
      window.removeEventListener('touchmove', handleTouchMove, options);
      window.removeEventListener('touchend', handleTouchEnd);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentIndex]); 

  return null; 
}

export default useScrollNavigation;
