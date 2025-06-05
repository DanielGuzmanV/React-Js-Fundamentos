
function PropsPadrehijo(props) {

  // Tambien podemos usar destructuring y ya no pondremos:
  // props.message, props.objectPerson.name, etc
  const {message, messageObject,objPerson} = props

  return (
    <>
      <h2>Uso de los props | Padre a hijo</h2>
      <p>Este es el componente hijo</p>

      <p>
        <b>{message}</b>
      </p>

      <div>
        <p>{messageObject}</p>
        <p>
          <b>Nombre: </b>{objPerson.name}
        </p>
        <p>
          <b>Apellido: </b>{objPerson.lastname}
        </p>
        <p>
          <b>Edad: </b>{objPerson.age}
        </p>

      </div>
    </>
  )
}

export default PropsPadrehijo








