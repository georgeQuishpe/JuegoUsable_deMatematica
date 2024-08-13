import React from 'react';
import './BtnTrofeo.css'; // Asegúrate de crear y estilizar este archivo
import home from './Img/icon-home.png'; // Reemplaza con la ruta de tu imagen
import reiniciar from './Img/Repetir.png'; // Reemplaza
import { useNavigate } from 'react-router-dom';

function BtnTrofeo() {
    const navigate = useNavigate();

  return (
    <div className="buttonWin-container">
    <button className="buttonWin-menu">
        <img src={home} alt="botón para regresar a la pantalla principal" className="icono"  onClick={() => navigate('/')} />
    </button>

    <button className="buttonWin-repetir">
        <img src={reiniciar} alt="botón para reptir el juego" className="icono"  onClick={() => navigate('/PasarNivel1')} />
    </button>
    </div>
  );
}

export default BtnTrofeo;