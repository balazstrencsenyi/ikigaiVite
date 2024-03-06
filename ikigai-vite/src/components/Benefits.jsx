import { useState } from 'react';
import LinearBuffer from './linearBuffer'; 

function Benefits() {
  const [rotation, setRotation] = useState(0);

  const rotateImage = () => {
    setRotation(rotation => rotation + 90);
  };

  return (
    <div className="benefits">
      <div className="benefitsWelcome">
        <h1>Benefits</h1>
        <LinearBuffer />
      </div>
      <div className='rotateContainer'>
        <img src="./src/assets/logo.png" className="rotate" style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.5s ease" }} />
        <button className="rotateButton" onClick={rotateImage}>Rotate</button>
      </div>
    </div>
  );
}

export default Benefits;
