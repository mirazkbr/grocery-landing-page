import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: 'var(--black-color)', // #253D4E
    color: 'var(--grey-color)', // #f3f3f3
    padding: '40px 20px',
    textAlign: 'center',
    borderTop: '1px solid var(--primary-color)' // #3BB77E
  };

  const linkStyle = {
    color: 'var(--primary-color)', // #3BB77E
    textDecoration: 'none',
    margin: '0 10px'
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <p>&copy; {currentYear} Groceyish. All Rights Reserved.</p>
      <p>
        <a href="/about" style={linkStyle}>About Us</a>
        <a href="/contact" style={linkStyle}>Contact</a>
        <a href="/privacy" style={linkStyle}>Privacy Policy</a>
      </p>
      <p>Powered by <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" style={linkStyle}>React</a></p>
    </footer>
  );
};

export default Footer;