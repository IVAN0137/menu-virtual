import React, { useState } from 'react';
import './MenuSection.css';

function MenuSection({ id, title, items, isOpen, onToggle }) {
  return (
    <section id={id} className={`menu-section ${isOpen ? 'expanded' : ''}`}>
      <h2 
        className="section-title" 
        onClick={() => onToggle(id)}
        style={{ cursor: 'pointer' }}
      >
        {title} <span className="toggle-icon">{isOpen ? '▲' : '▼'}</span>
      </h2>
      <div className={`section-items ${isOpen ? 'open' : 'closed'}`}>
        {items.map((item, index) => (
          <div 
            key={index} 
            className="menu-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <img src={item.image} alt={item.name} className="menu-card-image" />
            <div className="menu-card-content">
              <h3 className="menu-card-title">{item.name}</h3>
              <p className="menu-card-description">{item.description}</p>
              <p className="menu-card-price">${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MenuSection;
