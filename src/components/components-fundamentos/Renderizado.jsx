import { useState } from "react"

function Renderizado() {
  const [condition1, setCondition1] = useState(true);
  const [condition2, setCondition2] = useState(false);


  return (
    <div>
      <h2>Renderizado condicional</h2>

      <h4>Primera forma:</h4>
      {!condition1 && <p>La condicion cumple</p>}
      <button onClick={() => setCondition1(false)}> Cumple </button>
      <button onClick={() => setCondition1(true)}> No cumple </button>

      <br/>
      
      <h4>Segunda forma:</h4>
      {condition2 ? <p>La condicion se cumplio</p>: <p>No se cumple</p>}
      <button onClick={() => setCondition2(true)}> Cumple </button>
      <button onClick={() => setCondition2(false)}> No cumple </button>

    </div>
  )
}

export default Renderizado