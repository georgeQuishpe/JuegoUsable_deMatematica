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
              <img src={fondo} alt="Indicaciones del guia antes de empezar el juego" className="fondo" />
              <img src={IndicacionPrincipal} alt="Hola warrior, es hora de luchar, cada villano te pondra un reto en el 
              camino tu tarea es resolver el reto con tu inteligencia y derrotarlo. 
              Recuerda que tu equivocación te puede costar la muerte." className="img" Navegar="/Nivel1"/>
              <BotonesNivel buttonColor="#a0f4f4" Navegar="/Nivel1"/>
            </div>
          } />
          <Route path="/Nivel1" element={
            <div className="background">
              <img src={fondo} alt="Nivel 1" className="fondo" />
              <img src={OpcNivel1} alt="Hola warrior, es hora de Morir, a que no Sabes cual es la 
              representación del siguiente intervalo: t es el conjunto de todos los números reales x, 
              tales que x es mayor que -3." className="img" />
              <OpcionesN1 buttonColor="#a0f4f4" Navegar="/IndicacionesGuia2"/>
              <Pausa Nivel={"Nivel1"}/>
            </div>
          }/>
          <Route path="/IndicacionesGuia2" element={
            <div className="background">
              <img src={fondo} alt="Indicaciones del guie despues de derrotar al villano" className="fondo" />
              <img src={GanaN1} alt="Hola warrior, es hora de luchar, cada villano te pondra un reto en el 
              camino tu tarea es resolver el reto con tu inteligencia y derrotarlo. 
              Recuerda que tu equivocación te puede costar la muerte." className="img" />
              <BotonesNivel buttonColor="#a0f4f4" Navegar="/PasarNivel2"/>
            </div>
          } />
          <Route path="/PasarNivel2" element={<PasarNivel fondo={fondo2} Imagen={personaje} Navegar="/Nivel2"/>}/>
          <Route path="/Nivel2" element={
            <div className="background">
              <img src={fondo2} alt="Nivel 2" className="fondo" />
              <img src={OpcNivel2} alt="Hola warrior, es hora de Morir, a que no sabes como 
              se representa el siguiente intervalo en la recta: si A es elemnto de -4 a +3 y B es elemento de -2 a +6 ambos incluido
              los extremos, cual es la representación de A intersección B" className="img" />
              <OpcionesN2 buttonColor="#FEB085" Navegar="/IndicacionesGuia3"/>
              <Pausa Nivel={"Nivel2"}/>
            </div>
          }/>
          <Route path="/IndicacionesGuia3" element={
            <div className="background">
              <img src={fondo2} alt="Indicaciones del guie despues de derrotar a los villano Soperts" className="fondo" />
              <img src={GanaN2} alt="¡¡¡Grandioso derrotaste a los Sopers, vamos con el Ultimo villano 
              que es el mas fuerte!!!" className="img" />
              <BotonesNivel buttonColor="#FEB085" Navegar="/PasarNivel3"/>
            </div>
          } />
          <Route path="/PasarNivel3" element={<PasarNivel fondo={fondo3} Imagen={personaje} Navegar="/Nivel3"/>}/>
          <Route path="/Nivel3" element={
            <div className="background">
              <img src={fondo3} alt="Nivel 2" className="fondo" />
              <img src={OpcNivel3} alt="llego tu fin warrior, a ver si representas sabes como se esto lo siguiente: 
              si a es elemento de -2 a 0, b es elemento de +2 a +6 y c es elemento de +4 a +8 todos los conjuntos incluidos los
              extremos, cual es la representación de la unión del conjunto A con la intersección de los conjuntos B y C" className="img" />
              <OpcionesN3 buttonColor="#CA5D9E" Navegar="/Win"/>
              <Pausa Nivel={"Nivel3"}/>
            </div>
          }/>
          <Route path="/GameOver" element={
            <div className="background">
              <img src={FondoGameOver} alt="Game Over" className="fondo" />
              <img src={LogoGameOver} alt="Logo de Gamer Over" className="img" />
              <BtnHaus></BtnHaus>
            </div>
          }/>
          <Route path="/Pause/:nivel" element={
            <div className="background">
              <img src={FondoGameOver} alt="Pause" className="fondo" />
              <img src={LogoPausa} alt="Logo de pausar juego" className="img" />
              <BtnPausa/>
            </div>
          }/>
          <Route path="/Win" element={
            <div className="background">
              <img src={fondo3} alt="Fin del juego ganaste" className="fondo" />
              <img src={personajesWin} alt="Copa matematica por derrotar a todos los villanos" className="img" />
              <BtnWin/>
            </div>
          }/>
          <Route path="/Instrucciones" element={
            <div className="background">
              <img src={fondo} alt="Instrucciones" className="fondo" />
              <img src={imagenesMenu} alt="Explicación para jugar" className="img" />
              <Menu />
              <Instrucciones/>
              <BtnRegresa/>
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
              <BtnRegresa/>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
