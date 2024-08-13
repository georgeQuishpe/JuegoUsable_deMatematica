import React from 'react';
import './BotonesNivel.css';
import { useNavigate } from 'react-router-dom';


const BtnNivel = ({ buttonColor, Navegar}) => {
  const navigate = useNavigate();

  return (
    <div className="action-buttons-container">
      <button className="action-button" style={{ backgroundColor: buttonColor }}  onClick={() => navigate('/')}
        alt="botón para regresar al menú">
        MENÚ
      </button>
      <button className="action-button" style={{ backgroundColor: buttonColor }} onClick={() => navigate(Navegar)}
        alt="botón para continuar el juego">
        LUCHAR
      </button>
    </div>
  );
};

export default BtnNivel;