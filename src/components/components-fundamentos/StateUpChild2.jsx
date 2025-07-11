function StateUpChild2(props) {
  return (
    <div style={{
      border: '3px solid black',
      padding: '5px',
      margin: '20px'
    }}>
      <h2>Este es el componente hermano</h2>
      <h3>Hola: {props.userName}</h3>

    </div>
  )
}

export default StateUpChild2