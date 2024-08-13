import React, { useState, useEffect } from 'react';
import './App.css';
import TrasladarImagen from './TrasladarImagen';
import { useNavigate } from 'react-router-dom';

function PasarNivel1({ fondo, Imagen, Navegar}) {
  const [animate, setAnimate] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => {
      navigate(Navegar);
    }, 3000); // 3 segundos

    return () => clearTimeout(timer); // Limpiar el timeout si el componente se desmonta
  }, []);

  return (
    <div className="App">
      <TrasladarImagen fondo={fondo} Imagen={Imagen} animate={animate} />
    </div>
  );
}

export default PasarNivel1;

