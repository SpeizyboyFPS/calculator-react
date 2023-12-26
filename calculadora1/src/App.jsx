import { useState } from 'react'
import {evaluate} from 'mathjs';
import './App.css';
import Boton from './components/Boton';
import Pantalla from './components/pantalla';
import BtnClear from './components/btnClear';
// import logoCalcu from './assets/valores.jpg';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = val=>{
    setInput(input + val);
  };

const calcularRes = ()=>{
  if(input) {
    setInput(evaluate(input))
  }
  else {
    alert('favor ingrese valores para realizar los cálculos')
  }
};

  return (
    <div className='app'>
      <div className="logo-contenedor">
        <h1 className='titulo'>
          <span className='l1'>C</span>
          <span className='l2'>A</span>
          <span className='l3'>L</span>
          <span className='l4'>C</span>
          <span className='l5'>U</span>
          <span className='l6'>L</span>
          <span className='l7'>A</span>
          <span className='l8'>T</span>
          <span className='l9'>O</span>
          <span className='l10'>R</span>
          <span className='l11'></span>
        </h1>
      </div>
      <div className="contenedor-calculadora">
        <Pantalla  input={input}/>
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularRes}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BtnClear manejarClear={()=> setInput('')}>Clear</BtnClear>
        </div>
        
      </div>
    </div>
  )
}

export default App
