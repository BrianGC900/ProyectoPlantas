import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import './App.css';
import AboutUs from './AboutUs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad del botón

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  // Mostrar/ocultar el botón "Volver arriba" basado en el scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Función para manejar el scroll hacia arriba
  const scrollTo = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Bienvenido al paraíso de plantas</h1>
            <div className="divider"></div>
            <p>Donde lo verde se combina con serenidad</p>

            <button className="get-started-button" onClick={handleGetStartedClick}>
              Vamos
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList />
      </div>
      <ToastContainer />

      {/* Botón "Volver arriba" */}
      {isVisible && (
        <button className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
        </button>
      )}
    </div>
  );
}

export default App;
