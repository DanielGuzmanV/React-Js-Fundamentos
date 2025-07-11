import { useState } from "react"

function PropsHijopadre(props) {
  const [userName, setUserName] = useState("");

  const onChangeInput = (event) => {
    setUserName(event.target.value);
  }

  const handleClick = () => {
    props.handleLogin(userName)
  }

  return (
    <div style={{
      border: '2px solid black',
      padding: '5px'
    }}>

      <h3>Este es el componente hijo</h3>
      <p>
        <b>Nombre del usuario: </b> 
        {userName}
      </p>
      <input 
        type="text" 
        placeholder="Ingresa un nombre"
        value={userName}
        onChange={onChangeInput}
      />

      <button onClick={handleClick}>Login</button>

    </div>
  )
}

export default PropsHijopadre




