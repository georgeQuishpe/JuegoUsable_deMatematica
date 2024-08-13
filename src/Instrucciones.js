import React from 'react';
import './Instrucciones.css';
import EjemploEjercicio from './Img/EjemploEjercicio.png';
import btnLuchar from './Img/btnLuchar.png';
/*import { useNavigate } from 'react-router-dom';*/


function Instrucciones() {
    return (
      <div className="instrucciones-container">
        <h1 className="titulo">INSTRUCCIONES</h1>
        <div className="instruccion">
          <p>
            El juego tendrá niveles progresivos en los que se aumentará la complejidad según el nivel.
            Son 3 niveles en total, el nivel 3 es el nivel más complicado.
          </p>
        </div>
        <div className="instruccion">
          <p>
            Antes de cada nivel aparecerá el guía con un mensaje y un botón denominado <strong>Luchar</strong>, que sirve para comenzar el siguiente nivel:
          </p>
        <img src={btnLuchar} alt='btnLuchar'/>
        </div>
        <div className="instruccion">
          <p>
            Al iniciar el nivel, aparecerá una pregunta que hará referencia al problema que se debe solucionar. Por ejemplo:
          </p>
          <img src={EjemploEjercicio} alt='ejemplo de ejercio que se tiene que resolver'/>
        </div>
        <div className="instruccion">
          <p>
            Cada villano proporcionará un problema, el cual tienes que resolver y seleccionar la respuesta correcta para derrotarlo y pasar al siguiente nivel.
          </p>
        </div>
        <div className="instruccion">
          <p>
            Si se respondió correctamente pasarás de nivel y si la respuesta es incorrecta morirás en cada nivel. Solo tienes una oportunidad.
          </p>
        </div>
      </div>
    );
  }
  
  export default Instrucciones;