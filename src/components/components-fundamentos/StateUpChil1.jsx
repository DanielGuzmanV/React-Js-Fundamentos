
function StateUpChil1(props) {

  const handleClick = () => {
    props.functionLogin(props.valueName)
  }

  return (
    <div style={{
      border: '3px solid black',
      padding: '20px',
      margin: '20px'
    }}>

      <h2>Este es el componente hijo</h2>
      <p>
        <b>Nombre de usuario: </b>
        {props.valueName}
      </p>

      <input 
        type="text" 
        value={props.inputName} 
        placeholder="Ingrese un nombre"
        onChange={props.onChangeInput}
      />

      <button onClick={handleClick}>
        Login
      </button>

    </div>
  )
}

export default StateUpChil1




