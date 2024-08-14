import React from 'react';
import './Menu.css';
import play from './Img/play.png';
import instrucciones from './Img/instrucciones 1.png';
import settigs from './Img/settigs.png';
import material from './Img/Imagen7 1.png';
import { useNavigate } from 'react-router-dom';


const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="menu">
      <button className="menu-button" onClick={() => navigate('/PasarNivel1')}>
        <img src={play} alt="Jugar" />
        <span>Jugar</span>
      </button>
      <button className="menu-button" onClick={() => navigate('/Instrucciones')}>
        <img src={instrucciones} alt="instrucciones" />
        <span>Instrucciones</span>
      </button>
      <button className="menu-button btn-material" onClick={() => navigate('/Material')}>
        <img src={material} alt="material de estudios" />
        <span>Material de estudios</span>
      </button>
      <button className="menu-button" onClick={() => navigate('/Configuracion')}>
        <img src={settigs} alt="configuraciones" />
        <span>configuraciones</span>
      </button>
    </div>
  );
};

export default Menu;

