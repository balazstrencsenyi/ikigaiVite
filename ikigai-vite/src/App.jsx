/*import reactLogo from './assets/react.svg'*/
import "./App.css";
import Header from "./components/AppBar";

function App() {
  return (
    <>
      <Header />

      <div className="home">
        <div className="homeContainer">
          <img src="./src/assets/logo.png" className="homeLogo" />
          <h1 className="homeTitle">Digital Marketing Agency</h1>
          <h2>SLOGAN</h2>
        </div>
      </div>

      <div className="services">
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

      <div className="services1">
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

      <div className="benefits">
        
      </div>
    </>
  );
}

export default App;
