import './App.css';
import InputDesign from './components/InputDesign';
import Footer from './components/footer';
import { useState } from 'react';

function App() {
  const [isSettingUp, setIsSettingUp] = useState(false);

  const handleStartClick = () => {
    setIsSettingUp(true);
  };

  return (
    <>
      <InputDesign isSettingUp={isSettingUp} onStartClick={handleStartClick} />
      {!isSettingUp && <Footer />}
    </>
  );
}

export default App;
