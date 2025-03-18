import './App.css';
import HomePage from './components/HomePage';
import Footer from './components/footer';
import { useState } from 'react';

function App() {
  const [isSettingUp, setIsSettingUp] = useState(false);

  const handleStartClick = () => {
    setIsSettingUp(true);
  };

  return (
    <>
      <HomePage isSettingUp={isSettingUp} onStartClick={handleStartClick} />
      {!isSettingUp && <Footer />}
    </>
  );
}

export default App;
