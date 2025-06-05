import { useState } from "react";
import AtributoReactivo from "./components/AtributoReactivo";
import Renderizado from "./components/Renderizado";
import Listas from "./components/Listas";
import PropsPadrehijo from "./components/PropsPadrehijo";
import ClassComponent from "./components/ClassComponent";
import PropsHijopadre from "./components/PropsHijopadre";
import PageStateUp from "./pages/PageStateUp";
import PageUseEffect from "./pages/PageUseEffect";
import PageMenu from "./pages/PageMenu";
import PagePropsPadrehijo from "./pages/PagePropsPadrehijo";
import PagePropsHijoPadre from "./pages/PagePropsHijoPadre";
import PageFetchapi from "./pages/PageFetchapi";


function App() {

  // Evento Independiente y reutilizable:
  const greetConsole = () => {
    console.log('Saludo desde la consola');
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
      <PagePropsPadrehijo/>

      <hr/>
      <ClassComponent/>

      <hr/>
      <PagePropsHijoPadre/>

      <hr/>
      <PageStateUp/>

      <hr/>
      <PageUseEffect/>

      <hr/>
      <PageFetchapi/>

      
    </div>
  )
}

export default App
