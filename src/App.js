import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import fondo from './Img/fondoMenu.png';
import personaje from './Img/HEROS.png';
//primer Nivel
import IndicacionPrincipal from './Img/IndicacionPrincipal.png';
import imagenesMenu from './Img/Menu1.png';
import Menu from './menu';
import PasarNivel from './PasarNivel.js'; // Asegúrate de crear este componente
import BotonesNivel from './BotonesNivel.js';
import OpcNivel1 from './Img/OpcNivel1.png';
import OpcionesN1 from './OpcNivel1.js';
import GanaN1 from './Img/GanaN1.png';
/******/
//GameOver
import FondoGameOver from './Img/FondoGameOver.png';
import LogoGameOver from './Img/LogoGameOver.png';
import BtnHaus from './BtnHaus.js';
//Pause
import Pausa from './Pausa.js';
import LogoPausa from './Img/logoPauseJuego.png';
import BtnPausa from './BtnPausa.js';
//Win
import fondo3 from './Img/fondo3.png';
import personajesWin from './Img/personajesWin.png';
import BtnWin from './BtnTrofeo.js';
//segundo Nivel
import fondo2 from './Img/fondo2.png';
import OpcNivel2 from './Img/OpcNivel2.png';
import OpcionesN2 from './OpcNivel2.js';
import GanaN2 from './Img/GanaN2.png';
//tercer Nivel
import OpcNivel3 from './Img/OpcNivel3.png';
import OpcionesN3 from './OpcNivel3.js';
//Instrucciones
import Instrucciones from './Instrucciones.js';
import BtnRegresa from './Regresa.js';
//material de estudio 
import Material from './MaterialEstudio.js';
//configuración
import Configuracion from './Configuracion.js';
function App() {
  // useEffect para bloquear el zoom
  useEffect(() => {
    const handleWheel = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    const handleKeyDown = (event) => {
      if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '=')) {
        event.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <div className="background">
              <img src={fondo} alt="Menu" className="fondo" />
              <img src={imagenesMenu} alt="Presentación inicial del juego, titulo: Math warrior titulo, Personajes: guerrero y guia" className="img" />
              <Menu />
            </div>
          } />
          <Route path="/PasarNivel1" element={<PasarNivel fondo={fondo} Imagen={personaje} Navegar="/IndicacionesGuia"/>} />
          {/* Agrega más rutas aquí según sea necesario */}
          <Route path="/IndicacionesGuia" element={
            <div className="background">
              <img src={fondo} alt="Indicaciones del guia antes de empezar el juego" className="fondo"/>
              <img src={IndicacionPrincipal} alt="Hola warrior, es hora de luchar, cada villano te pondra un reto en el 
              camino tu tarea es resolver el reto con tu inteligencia y derrotarlo. 
              Recuerda que tu equivocación te puede costar la muerte." className="img" tabIndex={1} Navegar="/Nivel1"/>
              <BotonesNivel buttonColor="#a0f4f4" Navegar="/Nivel1" tabIndex={2}/>
            </div>
          } />
          <Route path="/Nivel1" element={
            <div className="background">
              <img src={fondo} alt="Nivel 1, Hola warrior, es hora de Morir, a que no Sabes cual es la 
              representación del siguiente intervalo: t es el conjunto de todos los números reales x, 
              tales que x es mayor que -3." className="fondo" tabIndex={0}/>
              <img src={OpcNivel1} alt="" className="img" tabIndex={1}/>
              <Pausa Nivel={"Nivel1"} tabIndex={2}/>
              <OpcionesN1 buttonColor="#a0f4f4" Navegar="/IndicacionesGuia2" tabIndex={3}/>

            </div>
          }/>
          <Route path="/IndicacionesGuia2" element={
            <div className="background">
              <img src={fondo} alt="Grandioso derrotaste al kks, vamos a luchar contra el siguiente villano" className="fondo" tabIndex={0}/>
              <img src={GanaN1} alt="" className="img" tabIndex={1}/>
              <BotonesNivel buttonColor="#a0f4f4" Navegar="/PasarNivel2" tabIndex={2}/>
            </div>
          } />
          <Route path="/PasarNivel2" element={<PasarNivel fondo={fondo2} Imagen={personaje} Navegar="/Nivel2"/>}/>
          <Route path="/Nivel2" element={
            <div className="background">
              <img src={fondo2} alt="Nivel 2, Hola warrior, es hora de Morir, a que no sabes como 
              se representa el siguiente intervalo en la recta: si A es elemnto de -4 a +3 y B es elemento de -2 a +6 ambos incluido
              los extremos, cual es la representación de A intersección B" className="fondo" tabIndex={0} />
              <img src={OpcNivel2} alt="" className="img" tabIndex={1} />
              <Pausa Nivel={"Nivel2"} tabIndex={2}/>
              <OpcionesN2 buttonColor="#FEB085" Navegar="/IndicacionesGuia3" tabIndex={3}/>

            </div>
          }/>
          <Route path="/IndicacionesGuia3" element={
            <div className="background">
              <img src={fondo2} alt="Grandioso derrotaste a los Sopers, vamos a luchar con lion, 
              el villano más fuerte y temible. Dale en luchar cuando estes preparado"
              className="fondo" tabIndex={0}/>
              <img src={GanaN2} alt="" className="img" tabIndex={1}/>
              <BotonesNivel buttonColor="#FEB085" Navegar="/PasarNivel3" tabIndex={2}/>
            </div>
          } />
          <Route path="/PasarNivel3" element={<PasarNivel fondo={fondo3} Imagen={personaje} Navegar="/Nivel3"/>}/>
          <Route path="/Nivel3" element={
            <div className="background">
              <img src={fondo3} alt="Nivel 2, llego tu fin warrior, a ver si representas lo siguiente: 
              si a es elemento de -2 a 0, b es elemento de +2 a +6 y c es elemento de +4 a +8 todos los conjuntos incluidos los
              extremos, cual es la representación de la unión del conjunto A con la intersección de los conjuntos B y C" className="fondo" tabIndex={0}/>
              <img src={OpcNivel3} alt="" className="img" tabIndex={1}/>
              <Pausa Nivel={"Nivel3"} tabIndex={2}/>
              <OpcionesN3 buttonColor="#CA5D9E" Navegar="/Win" tabIndex={3}/>
            </div>
          }/>
          <Route path="/GameOver" element={
            <div className="background">
              <img src={FondoGameOver} alt="Game Over" className="fondo" tabIndex={0}/>
              <img src={LogoGameOver} alt="Logo de Gamer Over" className="img" tabIndex={1}/>
              <BtnHaus tabIndex={2}></BtnHaus>
            </div>
          }/>
          <Route path="/Pause/:nivel" element={
            <div className="background">
              <img src={FondoGameOver} alt="Pause" className="fondo" tabIndex={0}/>
              <img src={LogoPausa} alt="Logo de pausar juego" className="img" tabIndex={1}/>
              <BtnPausa tabIndex={2}/>
            </div>
          }/>
          <Route path="/Win" element={
            <div className="background">
              <img src={fondo3} alt="Fin del juego ganaste" className="fondo" tabIndex={0}/>
              <img src={personajesWin} alt="Copa matematica por derrotar a todos los villanos" className="img" tabIndex={1}/>
              <BtnWin tabIndex={2}/>
            </div>
          }/>
          <Route path="/Instrucciones" element={
            <div className="background">
              <img src={fondo} alt="Instrucciones" className="fondo" tabIndex={0}/>
              <img src={imagenesMenu} alt="Explicación para jugar" className="img" tabIndex={1}/>
              <Instrucciones tabIndex={2}/>
              <BtnRegresa tabIndex={3}/>
              <Menu tabIndex={4}/>
            </div>
          } />
          <Route path="/Material" element={
            <div className="background">
              <img src={fondo} alt="Instrucciones" className="fondo" />
              <img src={imagenesMenu} alt="Explicación para jugar" className="img" />
              <Menu />
              <Material/>
              <BtnRegresa/>
            </div>
          } />
          <Route path="/Configuracion" element={
            <div className="background">
              <img src={fondo} alt="Instrucciones" className="fondo" />
              <img src={imagenesMenu} alt="Explicación para jugar" className="img" />
              <Menu />
              <Configuracion/>
              <BtnRegresa Navegar="/"/>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
