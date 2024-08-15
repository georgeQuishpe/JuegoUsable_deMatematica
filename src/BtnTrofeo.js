import React from 'react';
import './BtnTrofeo.css'; // Asegúrate de crear y estilizar este archivo
import home from './Img/icon-home.png'; // Reemplaza con la ruta de tu imagen
import reiniciar from './Img/Repetir.png'; // Reemplaza
import { useNavigate } from 'react-router-dom';

function BtnTrofeo() {
    const navigate = useNavigate();

    const handleKeyDown = (event, path) => {
        if (event.key === 'Enter') {
            navigate(path);
        }
    };

    return (
        <div className="buttonWin-container">
            <button 
                className="buttonWin-menu"
                onClick={() => navigate('/')} 
                onKeyDown={(event) => handleKeyDown(event, '/')}
            >
                <img src={home} alt="botón para regresar a la pantalla principal" className="icono" />
            </button>

            <button 
                className="buttonWin-repetir"
                onClick={() => navigate('/PasarNivel1')} 
                onKeyDown={(event) => handleKeyDown(event, '/PasarNivel1')}
            >
                <img src={reiniciar} alt="botón para repetir el juego" className="icono" />
            </button>
        </div>
    );
}

export default BtnTrofeo;
