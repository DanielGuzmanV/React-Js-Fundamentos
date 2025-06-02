import { useState } from "react"

function AtributoReactivo() {

  const [myText, setText] = useState("Ingrese un nombre:");
  const [myValue, setMyvalue] = useState("");

  // Evento para cambiar el valor del input:
  const handleInput = (event) =>{
    // Vemos los cambios en consola:
    console.log(event.target.value);
    setMyvalue(event.target.value);
  }

  return (
    <div>
      <h2>Formulario</h2>

      <h3>Tu nombre: {myValue}</h3>
      <input 
      type="text" 
      placeholder={myText} 
      value={myValue}
      onChange={handleInput}
      />

    </div>
  )
}

export default AtributoReactivo