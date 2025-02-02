import  { useState, useEffect } from 'react';
import MenuAppBar from './profileIcon';

function Header() {
  const headerHeight = 60; // Height of your header in pixels

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight, // Adjusted top position
        behavior: 'smooth'
      });
    }
  };

   const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled down past a certain threshold
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <div className={`Header ${isScrolled ? 'scrolled' : ''}`}>
      <nav>
        <img src="ikigai.png" className='ikigaiAspects' />
        <ul>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('services')}>Services</li>
          <li onClick={() => scrollToSection('benefits')}>Benefits</li>
          <li onClick={() => scrollToSection('team')}>Team</li>
          <li onClick={() => scrollToSection('form')}>Contact</li>
        </ul>
        <MenuAppBar />
      </nav>
    </div>
  );
}

export default Header;
