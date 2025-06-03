
function PropsComponent(props) {

  // Tambien podemos usar destructuring y ya no pondremos:
  // props.message, props.datePerson.name, etc
  const {message, datePerson} = props

  return (
    <>
      <h2>Uso de los props</h2>
      <p>Este es el componente hijo</p>

      <p>
        <b>{message}</b>
      </p>

      <div>
        <p>
          <b>Nombre: </b>{datePerson.name}
        </p>
        <p>
          <b>Apellido: </b>{datePerson.lastname}
        </p>
        <p>
          <b>Edad: </b>{datePerson.age}
        </p>

      </div>
    </>
  )
}

export default PropsComponent








