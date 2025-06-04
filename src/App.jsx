import { useState } from "react";
import Menu from "./components/Menu"
import AtributoReactivo from "./components/AtributoReactivo";
import Renderizado from "./components/Renderizado";
import Listas from "./components/Listas";
import PropsPadrehijo from "./components/PropsPadrehijo";
import ClassComponent from "./components/ClassComponent";
import PropsHijopadre from "./components/PropsHijopadre";
import PageStateUp from "./pages/PageStateUp";
import PageUseEffect from "./pages/PageUseEffect";
import PageMenu from "./pages/PageMenu";


function App() {

  // Evento Independiente y reutilizable:
  const greetConsole = () => {
    console.log('Saludo desde la consola');
  }

  // Uso de props padre a hijo:
  const textValue = 'Mensaje desde el componente padre';
  const objPerson = {
    name: 'Marco',
    lastname: 'Antonio',
    age: 34,
  };

  // Uso de props hijo a padre:
  const [displayName, setDisplayName] = useState("");

  const login = (valueName) => {
    setDisplayName(valueName);
  }


  return (
    <div>
      <h1 onClick={greetConsole} >Inicio del proyecto</h1>

      <PageMenu/>

      <hr/>
      <AtributoReactivo/>

      <hr/>
      <Renderizado/>

      <hr/>
      <Listas/>

      <hr/>
      <PropsPadrehijo message={textValue} datePerson={objPerson}>
      </PropsPadrehijo>

      <hr/>
      <ClassComponent/>

      <hr/>
      <h2> Props | Comunicacion hijo-padre</h2>
      <h3>Hola {displayName}</h3>
      <PropsHijopadre handleLogin={login}>
      </PropsHijopadre>

      <hr/>
      <PageStateUp/>

      <hr/>
      <PageUseEffect/>

      
    </div>
  )
}

export default App
