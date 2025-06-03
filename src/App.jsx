import { useState } from "react";
import Menu from "./components/Menu"
import AtributoReactivo from "./components/AtributoReactivo";
import Renderizado from "./components/Renderizado";
import Listas from "./components/Listas";
import PropsComponent from "./components/PropsComponent";


function App() {

  // Evento Independiente y reutilizable:
  const greetConsole = () => {
    console.log('Saludo desde la consola');
  }

  // useState:
  const [number, setNumber] = useState(0);

  // Funcion para aumentar el valor de number:
  const addOne = () => {
    setNumber(number + 1);
    console.log(number); // Vemos los cambios por consola
  }

  // Uso de props:
  const textValue = 'Mensaje desde el componente padre';
  const objPerson = {
    name: 'Marco',
    lastname: 'Antonio',
    age: 34,
  };

  return (
    <div>
      <h1 onClick={greetConsole} >Inicio del proyecto</h1>

      <Menu/>

      {/* Evento de uso local: */}
      <h2 onClick={() => {
        alert("Saludo desde el alert de Js")
      }} 
      >Saludo de un Alert</h2>

      {/* Uso del useState: */}
      <h3>Numero: {number}</h3>
      <button onClick={addOne}>
        Aumentar el numero
      </button>

      <hr/>
      <AtributoReactivo/>

      <hr/>
      <Renderizado/>

      <hr/>
      <Listas/>

      <hr/>
      <PropsComponent message={textValue} datePerson={objPerson}>
      </PropsComponent>
      
    </div>
  )
}

export default App
