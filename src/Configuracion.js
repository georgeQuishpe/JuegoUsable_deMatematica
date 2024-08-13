import React from 'react';
import './Configuracion.css';
//musica
import BtnMusica from './PlaySound.js';
/*import { useNavigate } from 'react-router-dom';*/


function MaterialEstudio() {
    return (
      <div className="configuracion-container">
        <h1 className="titulo-configuracion">Musica general:</h1>
        <div>
          <BtnMusica/>
        </div>
      </div>
    );
  }
  
  export default MaterialEstudio;