import { useState, useEffect } from 'react';
import "./App.css";
import Header from "./components/AppBar";
import LinearBuffer from "./components/linearBuffer";

function App() {
  const [rotation, setRotation] = useState(0);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Delaying to show the logo after a certain time for smooth sliding effect
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const rotateImage = () => {
    setRotation(rotation => rotation + 90);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60, // Adjusted top position considering the header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Header scrollToSection={scrollToSection} />

      <div id="home" className="home">
        <div className="homeContainer">
          {/* Apply show class conditionally */}
          <img src="./src/assets/logo.png" className={`homeLogo ${showLogo ? 'show' : ''}`} />
          <h1 className="homeTitle">Digital Marketing Agency</h1>
          <h2>SLOGAN</h2>
        </div>
      </div>

      <div id="services" className="services">
        <div className="servicesContainer">
          <h1 className="servicesTitle">Our Mission</h1>
          <div>
            At Ikigai, our mission is to help businesses discover their digital
            purpose and unlock their full potential. By seamlessly merging
            innovative web development solutions and strategic SEO strategies,
            we empower our clients to pursue their passions, fulfill their
            unique missions, and achieve sustainable growth in the digital
            realm.
          </div>
        </div>
      </div>

      <div id="services1" className="services1">
        <div className="services1Container">
          <div className="serviceImageContainer">
            <img src="./src/assets/serviceImage.jpg" className="serviceImage" />
          </div>
          <div className="serviceRightContainer">
            <div className="serviceTextUpperContainer">
              <h1>WEB DEVELOPMENT</h1>
              <div>
                At Ikigai, our mission is to help businesses discover their
                digital purpose and unlock their full potential. By seamlessly
                merging innovative web development solutions and strategic SEO
                strategies, we empower our clients to pursue their passions,
                fulfill their unique missions, and achieve sustainable growth in
                the digital realm.
              </div>
            </div>
            <div className="serviceTextBottomContainer">
              <h1>DIGITAL MARKETING</h1>
              <div>
                At Ikigai, our mission is to help businesses discover their
                digital purpose and unlock their full potential. By seamlessly
                merging innovative web development solutions and strategic SEO
                strategies, we empower our clients to pursue their passions,
                fulfill their unique missions, and achieve sustainable growth in
                the digital realm.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="benefits" className="benefits">
        <div className="benefitsWelcome">
          <h1>Benefits</h1>
          <LinearBuffer />
        </div>
        <div className='rotateContainer'>
          <img src="./src/assets/logo.png" className="rotate" style={{ transform: `rotate(${rotation}deg)`, transition: "transform 0.5s ease" }} />
          <button className="rotateButton" onClick={rotateImage}>Rotate</button>
        </div>
      </div>

      <div id="team" className='team'>
        <div className='leftContainer'>
          <div>T</div>
          <div>E</div>
          <div>A</div>
          <div>M</div>
        </div>
        <div className='rightContainer'>
          <img src="./src/assets/balazs.jpg" className='trenyo' />
          <img src="./src/assets/marci.jpg"className='taki' />
        </div>
      </div>

      <div id="form" className='form'>
        <div className='formContainer'>
          <div className='growTogetherContainer'>
            <h1 className='growTogether'>LET&apos;S GROW TOGETHER</h1>
          </div>
          <div className='formContainer'>
            <form>
              <input type='text' placeholder='Name' />
              <input type='text' placeholder='Email' />
              <textarea placeholder='Message' />
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>

      <div className='footer'>
        <h1>footer</h1>
      </div>
    </>
  );
}

export default App;
