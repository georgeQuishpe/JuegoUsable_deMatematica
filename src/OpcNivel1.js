import React from 'react';
import './OpcNivel.css';
import { useNavigate } from 'react-router-dom';


const BtnNivel1 = ({ buttonColor, Navegar }) => {
  const navigate = useNavigate();

  return (
    <div className="buttons-opc">
        <div className="buttons-container1">
            <button className="opc-button" style={{ backgroundColor: buttonColor }}  onClick={() => navigate(Navegar)}
            alt="abre paréntesis -3, coma, infinito positivo y cierro parentecis">
            &#40;-3, +&#8734;&#41;
            </button>
            <button className="opc-button" style={{ backgroundColor: buttonColor }} onClick={() => navigate('/GameOver')}
            alt="abre corchete -3, coma, 0 y cierro paréntesis">
            &#91;-3, 0&#41;
             </button>
        </div>
        <div className="buttons-container2">
            <button className="opc-button" style={{ backgroundColor: buttonColor }}  onClick={() => navigate('/GameOver')}
            alt="abre paréntesis infinito negativo, coma, -3 y cierro parentecis">
            &#40;-&#8734;, -3&#41;
            </button>
            <button className="opc-button" style={{ backgroundColor: buttonColor }} onClick={() => navigate('/GameOver')}
            alt="abre corchete -3, coma, 0 y cierro corchete">
            &#91;-3, 0&#93;
            </button>
        </div>
    </div>
  );
};

export default BtnNivel1;