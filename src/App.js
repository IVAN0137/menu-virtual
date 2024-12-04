import React, { useState } from 'react';
import './App.css';
import MenuSection from './components/MenuSection';

const menuData = {
  pizzas: [
    { name: 'Pepperoni', description: 'Clásica con pepperoni', price: 120, image: '/images/pepperoni.jpg' },
    { name: 'Hawaiana', description: 'Piña y jamón', price: 130, image: '/images/hawaiana.jpg' },
  ],
  hamburguesas: [
    { name: 'Clásica', description: 'Carne de res y queso', price: 80, image: '/images/classic-burger.jpg' },
    { name: 'Especial', description: 'Doble carne y extra queso', price: 100, image: '/images/special-burger.jpg' },
  ],
  maruchan: [
    { name: 'Tradicional', description: 'Sopa instantánea', price: 50, image: '/images/maruchan.jpg' },
    { name: 'Especial', description: 'Con toppings extra', price: 70, image: '/images/special-maruchan.jpg' },
  ],
  bebidas: [
    { name: 'Coca-Cola', description: '500 ml', price: 20, image: '/images/coca-cola.jpg' },
    { name: 'Limonada', description: 'Hecha en casa', price: 30, image: '/images/lemonade.jpg' },
  ],
};

function App() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <div className="App">
      {Object.entries(menuData).map(([key, value]) => (
        <MenuSection
          key={key}
          id={key}
          title={key.charAt(0).toUpperCase() + key.slice(1)}
          items={value}
          isOpen={openSection === key}
          onToggle={toggleSection}
        />
      ))}
    </div>
  );
}

export default App;
