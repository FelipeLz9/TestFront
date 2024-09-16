import React from 'react';
import { Link } from 'react-router-dom'; 

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li> {/* Provide the children prop */}
          <li><Link to="/horarios">Horarios</Link></li>
          <li><Link to="/instructores">Instructores</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
