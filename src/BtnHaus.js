import React from 'react';
import './BtnHaus.css'; // Asegúrate de crear y estilizar este archivo
import icono from './Img/icon-home.png'; // Reemplaza con la ruta de tu imagen
import { useNavigate } from 'react-router-dom';

function BtnHaus() {
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate('/');
    }
  };

  return (
    <button 
      className="button-home"
      onClick={() => navigate('/')} 
      onKeyDown={handleKeyDown}
    >
      <img src={icono} alt="botón para regresar a la pantalla principal" className="icono-home" />
    </button>
  );
}

export default BtnHaus;
