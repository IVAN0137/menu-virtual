import React, { useState } from 'react';
import './Menu.css';
import { FaBars, FaTimes } from 'react-icons/fa';

function Menu() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="menu-header">
      <div className="menu-logo">🍕 Pizzería Deliciosa</div>
      <nav className={`menu-nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="menu-list">
          <li className="menu-item"><a href="#pizzas">Pizzas</a></li>
          <li className="menu-item"><a href="#hamburguesas">Hamburguesas</a></li>
          <li className="menu-item"><a href="#maruchan">Maruchan</a></li>
          <li className="menu-item"><a href="#bebidas">Bebidas</a></li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Menu;
