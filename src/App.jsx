import MyRoutes from "./routes/Routes"

function App() {

  // Evento Independiente y reutilizable:
  const greetConsole = () => {
    console.log('Saludo desde la consola');
  }

  return (
    <div>
      <h1 onClick={greetConsole} >Inicio del proyecto</h1>

      <MyRoutes/>
      <hr/>

    </div>
  )
}

export default App
