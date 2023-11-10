import { useEffect, useState } from 'react';

function useTypewriter(message : string) {
    const [typewriterMessage, settypewriterMessage] = useState('');
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      if (index < message.length) {
        const timer = setTimeout(() => {
            settypewriterMessage((prev) => prev + message[index]);
          setIndex((i) => i + 1);
        }, 100);
  
        return () => clearTimeout(timer);
      }
    }, [index, message]);

    return typewriterMessage
}

export default useTypewriter;
