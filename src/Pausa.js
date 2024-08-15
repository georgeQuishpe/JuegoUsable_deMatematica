import React from 'react';
import './Pausa.css'; // Asegúrate de crear y estilizar este archivo
import icono from './Img/btnPausa.png'; // Reemplaza con la ruta de tu imagen
import { useNavigate } from 'react-router-dom';

function BtnHaus({ Nivel }) {
  const navigate = useNavigate();

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      navigate(`/Pause/${Nivel}`);
    }
  };

  return (
    <button
      className="button-Pause"
      onClick={() => navigate(`/Pause/${Nivel}`)}
      onKeyDown={handleKeyDown}
    >
      <img src={icono} alt="botón para pausar" className="icono-Pause" />
    </button>
  );
}

export default BtnHaus;
