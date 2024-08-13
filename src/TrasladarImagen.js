import React from 'react';
import './TrasladarImagen.css';

const TrasladarImagen = ({ fondo, Imagen, animate }) => {
  return (
    <div className="background">
      <img src={fondo} alt="Fondo" className="fondo" />
      <img 
        src={Imagen} 
        alt="Guerrero del juego" 
        className={`imagen ${animate ? 'animate' : ''}`} 
      />
    </div>
  );
};

export default TrasladarImagen;