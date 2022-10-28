
import { useState } from 'react';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import codeLogo from './imagenes/Code_Black_Logo.png';


function App() {

  const [numClics, setNumClics]= useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='code-logo-contenedor'>
        <img
        className='code-logo'
        src={codeLogo}
        alt='logo de code'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}
        
        />
        <Boton 
        texto = 'Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />
        <Boton 
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
      </div>

    </div>
  );
}

export default App;
