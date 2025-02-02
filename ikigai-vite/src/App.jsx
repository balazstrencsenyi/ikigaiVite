import { useState, useEffect, useRef } from "react";
import database from "./firebase";
import "./App.css";
import Header from "./components/AppBar";
import LinearBuffer from "./components/linearBuffer";
import LinearIndeterminate from "./components/linearProgess";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { ref, push } from "firebase/database";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import TitlebarBelowImageList from "./components/References";

function App() {
  const [rotation, setRotation] = useState(0);
  const [showLogo, setShowLogo] = useState(false);
  const [showBalazsDiv, setShowBalazsDiv] = useState(false);
  const [showMarciDiv, setShowMarciDiv] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const balazsRef = useRef(null);
  const marciRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const rotateImage = () => {
    setRotation((rotation) => rotation + 90);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: "smooth",
      });
    }
  };

  const toggleBalazsDiv = () => {
    setShowBalazsDiv(!showBalazsDiv);
  };

  const toggleMarciDiv = () => {
    setShowMarciDiv(!showMarciDiv);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const message = e.target.elements.message.value;

    push(ref(database, "formData"), {
      name: name,
      email: email,
      message: message,
    });

    // Show notification
    setShowNotification(true);

    // Reset form
    e.target.reset();
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold as per your requirement
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === balazsRef.current) {
            setShowBalazsDiv(true);
          } else if (entry.target === marciRef.current) {
            setShowMarciDiv(true);
          }
        } else {
          if (entry.target === balazsRef.current) {
            setShowBalazsDiv(false);
          } else if (entry.target === marciRef.current) {
            setShowMarciDiv(false);
          }
        }
      });
    }, options);

    if (balazsRef.current) {
      observer.observe(balazsRef.current);
    }
    if (marciRef.current) {
      observer.observe(marciRef.current);
    }

    return () => {
      if (balazsRef.current) {
        observer.unobserve(balazsRef.current);
      }
      if (marciRef.current) {
        observer.unobserve(marciRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setScrollPosition(scrollY);
      // Define a threshold where you want the animation to start
      const threshold = 500; // Adjust as needed
      setIsScrolled(scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close notification after 3 seconds
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  useEffect(() => {
    // Define the range where you want the rotation to occur
    const startRange = 2000; // Adjust as needed
    const endRange = 4000; // Adjust as needed

    // Calculate the rotation angle based on the scroll position
    if (scrollPosition >= startRange && scrollPosition <= endRange) {
      const normalizedScroll =
        (scrollPosition - startRange) / (endRange - startRange);
      const rotationAngle = normalizedScroll * 180; // Rotate 360 degrees
      setRotation(rotationAngle);
    }
  }, [scrollPosition]);

  return (
    <>
      <Header scrollToSection={scrollToSection} />
      <video autoPlay muted loop id="background-video">
            <source
              src="./src/assets/background.mp4"
              type="video/mp4"
              className="video"
            />
            Your browser does not support the video tag.
          </video>
      <div id="home" className="home">
         
        <div className="homeContainer">
          <img
            src="./src/assets/logo.png"
            alt="logo"
            className={`homeLogo ${showLogo ? "show" : ""}`}
          />
          <h1 className="homeTitle">Digital Marketing Agency</h1>
          <h2>Unleash Your Digital Purpose with Ikigai.</h2>
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
          <LinearIndeterminate />
        </div>
      </div>

      <div id="services1" className="services1">
        <div className="services1Container">
          <div className="serviceImageContainer">
            <img
              src="./src/assets/serviceImage.jpg"
              alt="service"
              className="serviceImage"
            />
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
          <h1>Benefits & References</h1>
          <LinearBuffer />
        </div>
        <div className="benefitsBottomContainer">
          <div className="benefitsBottomLeftContainer">
            <div className="referencesContainer">
              <TitlebarBelowImageList />
              <div className="scrollText">
                <div className="scrollLetter">S</div>
                <div className="scrollLetter">C</div>
                <div className="scrollLetter">R</div>
                <div className="scrollLetter">O</div>
                <div className="scrollLetter">L</div>
                <div className="scrollLetter">L</div>
              </div>
            </div>
          </div>
          <div className="rotateContainer">
            <img
              src="./src/assets/logo.png"
              alt="rotating logo"
              className="rotate"
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.5s ease",
              }}
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={rotateImage}
              style={{ position: "absolute", top: "40%", left: "30%" }}
            >
              Rotate
            </Button>
          </div>
        </div>
      </div>

      <div id="team" className="team">
        <div className="leftContainer">
          <div>T</div>
          <div>E</div>
          <div>A</div>
          <div>M</div>
        </div>
        <div className="rightContainer">
          <div ref={balazsRef} className="balazsCards">
            {showBalazsDiv && (
              <div
                className={`renderedDiv ${isScrolled ? "slide-left" : ""}`}
                id="balazsRenderedDiv"
              >
                <h1>Trencsényi Balázs</h1>
                <div>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos
                  neque suscipit ipsum sequi. Doloremque corporis commodi
                  dolorem animi veniam soluta repellat ad inventore rem
                  repellendus? Praesentium mollitia et molestias consequatur.
                </div>
              </div>
            )}

            <div className="balazsCard">
              <img
                src="./src/assets/balazs.jpg"
                alt="Balazs"
                className="trenyo"
              />
              <div className="name">Trencsényi Balázs</div>
              <Button
                variant="contained"
                startIcon={<SendIcon />}
                style={{
                  transform: "rotate(180deg)",
                  backgroundColor: "black",
                  borderRadius: "0%",
                  borderTopLeftRadius: "20px",
                  borderTopRightRadius: "20px",
                }}
                onClick={toggleBalazsDiv}
              ></Button>
            </div>
          </div>

          <div ref={marciRef} className="marciCard">
            <img src="./src/assets/marci2.jpeg" alt="Marci" className="taki" />
            <div className="name">Takács Márton</div>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              style={{
                backgroundColor: "black",
                borderRadius: "0%",
                borderBottomLeftRadius: "20px",
                borderBottomRightRadius: "20px",
              }}
              onClick={toggleMarciDiv}
            ></Button>

            {showMarciDiv && (
              <div
                className={`renderedDiv ${isScrolled ? "slide-right" : ""}`}
                id="marciRenderedDiv"
              >
                <h1>Takács Márton</h1>
                <div>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem optio odit libero officia aliquid repellat vel
                  assumenda maxime, facere excepturi quidem voluptatem iure. Est
                  enim quia illum, ipsum necessitatibus nostrum.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div id="form" className="form">
        <div className="formContainer">
          {showNotification && (
            <Alert severity="success" className="alert">
              <AlertTitle>Success</AlertTitle>
              Form submitted successfully!
            </Alert>
          )}
          <div className="growTogetherContainer">
            <h1 className="growTogether">LET&apos;S GROW TOGETHER</h1>
          </div>
          <div className="formContainer">
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" />
              <input type="email" name="email" placeholder="Email" />
              <textarea name="message" placeholder="Message" />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>

      <div className="footer">
        <div className="footerCreds">
          ©2024 All Rights Reserved. Ikigai® is a registered trademark of The
          BalTon GROUP.
        </div>
        <div className="socials">
          <LinkedInIcon style={{ cursor: "pointer" }} />
          <InstagramIcon style={{ cursor: "pointer" }} />
          <FacebookIcon style={{ cursor: "pointer" }} />
          <YouTubeIcon style={{ cursor: "pointer" }} />
          <XIcon style={{ cursor: "pointer" }} />
        </div>
      </div>
    </>
  );
}

export default App;
