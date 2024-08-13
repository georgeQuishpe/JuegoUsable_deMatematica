import React from 'react';
import './BtnPausa.css'; // Asegúrate de crear y estilizar este archivo
import home from './Img/icon-home.png'; // Reemplaza con la ruta de tu imagen
import play from './Img/PlayOfpause.png'; // Reemplaza
import reiniciar from './Img/Repetir.png'; // Reemplaza
import { useNavigate, useParams } from 'react-router-dom';

function BtnPausa() {
    const navigate = useNavigate();
    const { nivel } = useParams();

  return (
    <div className="buttonPaus-container">
    <button className="button-menu">
        <img src={home} alt="botón para regresar a la pantalla principal" className="icono"  onClick={() => navigate('/')} />
    </button>

    <button className="button-play">
        <img src={play} alt="botón para salir de pausa" className="icono"  onClick={() => navigate("/"+nivel)} />
    </button>

    <button className="button-repetir">
        <img src={reiniciar} alt="botón para reptir el juego" className="icono"  onClick={() => navigate('/PasarNivel1')} />
    </button>
    </div>
  );
}

export default BtnPausa;