import MyRoutes from "./routes/Routes"
import reactLogo from "./assets/react.svg"
import { useNavigate } from "react-router-dom";

function App() {
  const mainNavigation = useNavigate(); 

  // Evento Independiente y reutilizable:
  const greetConsole = () => {
    console.log('Saludo desde la consola');
    mainNavigation('/')
  }

  return (
    <div>
      <h1 onClick={greetConsole} >
        Inicio del proyecto
        <img style={{
          width: '50px',
          padding: '8px'
        }} src={reactLogo}/>
      </h1>

      <MyRoutes/>
      <hr/>

    </div>
  )
}

export default App
