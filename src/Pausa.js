import React from 'react';
import './Pausa.css'; // Asegúrate de crear y estilizar este archivo
import icono from './Img/btnPausa.png'; // Reemplaza con la ruta de tu imagen
import { useNavigate } from 'react-router-dom';

function BtnHaus({Nivel}) {
  const navigate = useNavigate();
  
  return (
    <button className="button-Pause">
      <img src={icono} alt="botón para pausar" className="icono-Pause"  onClick={()=>navigate(`/Pause/${Nivel}`)} />
    </button>
  );
}

export default BtnHaus;