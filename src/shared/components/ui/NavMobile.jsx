import React from 'react';
import PropTypes from 'prop-types';
import './NavMobile.css';

const NavMobile = ({ links }) => {
  return (
    <nav className="nav-mobile">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

NavMobile.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};

export default NavMobile;