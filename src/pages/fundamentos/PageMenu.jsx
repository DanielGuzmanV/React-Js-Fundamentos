import { useState } from "react"
import Menu from "../../components/components-fundamentos/Menu"

function PageMenu() {
  const [number, setNumber] = useState(0);

  // Funcion para aumentar el valor de "number"
  const addNumbers = () => {
    setNumber(number + 1);
    console.log('El numero actual es: ', number)
  }

  const restartNumber = () => {
    setNumber(0)
  }

  return (
    <div>
      {/* Llamamos al primer componente */}
      <Menu number={number} valueRestart={restartNumber}/>

      <h2 onClick={() => {alert('Hola desde el alert con Js')}}>
        Saludar con un alert
      </h2>

      <h3>Numero: {number}</h3>

      <button onClick={addNumbers}>Aumentar el valor</button>
    </div>
  )
}

export default PageMenu