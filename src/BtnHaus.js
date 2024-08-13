import React from 'react';
import './BtnHaus.css'; // Asegúrate de crear y estilizar este archivo
import icono from './Img/icon-home.png'; // Reemplaza con la ruta de tu imagen
import { useNavigate } from 'react-router-dom';

function BtnHaus() {
  const navigate = useNavigate();
  return (
    <button className="button-home">
      <img src={icono} alt="botón para regresar a la pantalla principal" className="icono-home"  onClick={() => navigate('/')} />
    </button>
  );
}

export default BtnHaus;