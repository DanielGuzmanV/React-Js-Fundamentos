import Menu from "./components/Menu"


function App() {

  // Evento Independiente y reutilizable:
  const greetConsole = () => {
    console.log('Saludo desde la consola');
  }

  return (
    <div>
      <h1 onClick={greetConsole} >Inicio del proyecto</h1>
      
      <Menu/>

      {/* Evento de uso local: */}
      <h2 onClick={() => {
        alert("Saludo desde el alert de Js")
      }} 
      >Saludo de un Alert</h2>
    </div>

  )
}

export default App
