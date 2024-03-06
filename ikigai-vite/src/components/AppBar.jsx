function Header() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth' // Smooth scrolling behavior
      });
    }
  };

  return (
    <div className="Header">
      <nav>
        <ul>
          <li onClick={() => scrollToSection('home')}>Home</li>
          <li onClick={() => scrollToSection('services')}>Services</li>
          <li onClick={() => scrollToSection('benefits')}>Benefits</li>
          <li onClick={() => scrollToSection('team')}>Team</li>
          <li onClick={() => scrollToSection('form')}>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
