import React from 'react';
import './Menu.css';
import play from './Img/jugar.png';
import instrucciones from './Img/instrucciones.png';
import settigs from './Img/configuracion.png';
import material from './Img/materialDeEstudio.png';
import { useNavigate } from 'react-router-dom';


const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="menu">
      <button className="menu-button" onClick={() => navigate('/PasarNivel1')}>
        <img src={play}/>
        <span>Jugar</span>
      </button>
      <button className="menu-button" onClick={() => navigate('/Instrucciones')}>
        <img src={instrucciones}/>
        <span>Instrucciones</span>
      </button>
      <button className="menu-button btn-material" onClick={() => navigate('/Material')}>
        <img src={material} />
        <span>Material de estudios</span>
      </button>
      <button className="menu-button" onClick={() => navigate('/Configuracion')}>
        <img src={settigs}/>
        <span>configuraciones</span>
      </button>
    </div>
  );
};

export default Menu;

