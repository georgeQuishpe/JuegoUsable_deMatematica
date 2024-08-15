import React from 'react';
import './BtnPausa.css'; // Asegúrate de crear y estilizar este archivo
import home from './Img/icon-home.png'; // Reemplaza con la ruta de tu imagen
import play from './Img/PlayOfpause.png'; // Reemplaza
import reiniciar from './Img/Repetir.png'; // Reemplaza
import { useNavigate, useParams } from 'react-router-dom';

function BtnPausa() {
    const navigate = useNavigate();
    const { nivel } = useParams();

    const handleKeyDown = (event, path) => {
        if (event.key === 'Enter') {
            navigate(path);
        }
    };

    return (
        <div className="buttonPaus-container">
            <button 
                className="button-menu" 
                onClick={() => navigate('/')} 
                onKeyDown={(event) => handleKeyDown(event, '/')}
            >
                <img src={home} alt="botón para regresar a la pantalla principal" className="icono" />
            </button>

            <button 
                className="button-play" 
                onClick={() => navigate("/" + nivel)} 
                onKeyDown={(event) => handleKeyDown(event, "/" + nivel)}
            >
                <img src={play} alt="botón para salir de pausa" className="icono" />
            </button>

            <button 
                className="button-repetir" 
                onClick={() => navigate('/PasarNivel1')} 
                onKeyDown={(event) => handleKeyDown(event, '/PasarNivel1')}
            >
                <img src={reiniciar} alt="botón para repetir el juego" className="icono" />
            </button>
        </div>
    );
}

export default BtnPausa;
