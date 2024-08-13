import React from 'react';
import './OpcNivel.css';
import { useNavigate } from 'react-router-dom';


const BtnNivel2 = ({ buttonColor, Navegar}) => {
  const navigate = useNavigate();

  return (
    <div className="buttons-opc">
        <div className="buttons-container1">
            <button className="opc-button" style={{ backgroundColor: buttonColor }}  onClick={() => navigate('/GameOver')}
            alt=" ">
            &#91;-4, 6&#93;
            </button>
            <button className="opc-button" style={{ backgroundColor: buttonColor }} onClick={() => navigate('/GameOver')}
            alt=" ">
            &#91;-4, -2&#93;
             </button>
        </div>
        <div className="buttons-container2">
            <button className="opc-button" style={{ backgroundColor: buttonColor }}  onClick={() => navigate(Navegar)}
            alt=" ">
            &#91;-2, 3&#93;
            </button>
            <button className="opc-button" style={{ backgroundColor: buttonColor }} onClick={() => navigate('/GameOver')}
            alt=" ">
           &#91;-2, 6&#93;
            </button>
        </div>
    </div>
  );
};

export default BtnNivel2;