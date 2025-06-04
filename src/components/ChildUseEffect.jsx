import { useEffect, useState } from "react"

function ChildUseEffect() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Componente hijo se ha montado');
  }, [])

  // Se ejecuta en cada renderizado;
  useEffect(() => {
    console.log('Componente hijo renderizado');
  });

  // Se ejecuta solo cuando cambia el counter
  useEffect(() => {
    console.log('Counter actualizado: ', counter);
  }, [counter]);

  useEffect( () => {
    return() => {
      console.log('El componente se desmontado.');
    }
  },[]);


  return (
    <div style={{
      border: '3px solid black',
      padding: '20px',
      margin: '20px'
    }}>

      <h3>Este es el componente hijo</h3>
      <h4>Numero: {counter}</h4>

      <button onClick={() => setCounter(counter + 1)}>push</button>

    </div>
  )
}

export default ChildUseEffect


