import React from 'react';
import './Pausa.css'; // Asegúrate de crear y estilizar este archivo
import icono from './Img/flechaIzquierda.png'; // Reemplaza con la ruta de tu imagen
import { useNavigate } from 'react-router-dom';

function BtnRegresa() {
  const navigate = useNavigate();
  
  return (
    <button className="button-Regresar">
      <img src={icono} alt="botón para regresar a menu" className="icono-Regresar" onClick={()=>navigate('/')} />
    </button>
  );
}

export default BtnRegresa;