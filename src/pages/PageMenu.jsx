import { useState } from "react"
import Menu from "../components/Menu"

function PageMenu() {
  const [number, setNumber] = useState(0);

  // Funcion para aumentar el valor de "number"
  const addNumbers = () => {
    setNumber(number + 1);
    console.log('El numero actual es: ', number)
  }

  return (
    <div>
      <Menu/>

      <h2 onClick={() => {alert('Hola desde el alert con Js')}}>
        Saludo con un alert
      </h2>

      <h3>Numero: {number}</h3>

      <button onClick={addNumbers}>Aumentar el valor</button>
    </div>
  )
}

export default PageMenu