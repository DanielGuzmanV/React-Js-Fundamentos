
function PropsComponent(props) {

  // Tambien podemos usar destructuring y ya no pondremos:
  // props.message, props.objectPerson.name, etc
  const {message, messageObject,objectPerson} = props

  return (
    <>
      <h2>Uso de los props</h2>
      <p>Este es el componente hijo</p>

      <p>
        <b>{message}</b>
      </p>

      <div>
        <p>{messageObject}</p>
        <p>
          <b>Nombre: </b>{objectPerson.name}
        </p>
        <p>
          <b>Apellido: </b>{objectPerson.lastname}
        </p>
        <p>
          <b>Edad: </b>{objectPerson.age}
        </p>

      </div>
    </>
  )
}

export default PropsComponent








