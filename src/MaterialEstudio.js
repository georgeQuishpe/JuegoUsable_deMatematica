import React from 'react';
import './MaterialEstudio.css';
/*import { useNavigate } from 'react-router-dom';*/


function MaterialEstudio() {
    return (
      <div className="material-container">
        <h1 className="titulo-material">Videos sobre Intervalos:</h1>
        <div className="material">
          <p>
          Introducción al concepto de intervalos, hablando de los conjuntos de números reales y los tipos de intervalos.
          </p>
          <div className='VideoYoutube'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/yhdmoH_lyeU?si=OilxIFlU15Yfc2vN" 
          title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
          gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
        <div className="material">
          <p>
          Introducción al concepto de intervalos, hablando de los conjuntos de números reales y los tipos de 
          intervalos: abiertos, cerrados y semiabiertos, dentro del curso de intervalos | inecuaciones.
          </p>
          <div className='VideoYoutube'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/3hoeBMp0cQw?si=AwOwHWGEAyXuWIXc" title="YouTube video player" 
          frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
           referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>

        <h1 className="titulo-material">Tips:</h1>

        <div className="material">
          <p>
            Al iniciar el nivel, aparecerá una pregunta que hará referencia al problema que se debe solucionar. Por ejemplo:
          </p>
        </div>
        <div className="material">
          <p>
            Cada villano proporcionará un problema, el cual tienes que resolver y seleccionar la respuesta correcta para derrotarlo y pasar al siguiente nivel.
          </p>
        </div>
      </div>
    );
  }
  
  export default MaterialEstudio;