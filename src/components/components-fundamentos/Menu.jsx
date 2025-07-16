import { useState } from 'react';
import './Menu.css';

function Menu(props) {
  const [valueNum, setValueNum] = useState(0);
  const valueNumbers = () => {
    setValueNum(valueNum + props.number);
  }

  const subtractNumber = () => {
    setValueNum(valueNum - 1);
  }

  return (
    <div className='contentTitle'>
      <h2 className='firstComponent'>Primer componente del menu</h2>
      <p>Parrafo numero: {props.number} del componente</p>

      <button onClick={props.valueRestart}>
        Reiniciar Valor
      </button>

      <p>Numeros: {valueNum}</p>
      <button onClick={valueNumbers}>
        add value
      </button>
      <button onClick={subtractNumber}>
        Restar valor
      </button>
    </div>
  )
}

export default Menu;

