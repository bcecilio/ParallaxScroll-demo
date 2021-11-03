import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

function App() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default App;
