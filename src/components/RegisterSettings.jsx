import { useContext, useState } from "react"
import { UserContext } from "../context/user_context"
import '../components/RegisterSettings.css'

function RegisterSettings() {
  const {user, setDataUser, loginUser, logoutUser} = useContext(UserContext)

  const [formUser, setFormUser] = useState({
    nombre: '',
    email: '',
    rol: 'opcion'
  });

  // Manejar los cambios de los inputs
  const handlChange = (event) => {
    setFormUser({
      ...formUser,
      [event.target.name]: event.target.value
    });
  };

  // Iniciar sesion con los datos del formulario:
  const handleLogin = (event) => {
    event.preventDefault();
    setDataUser({
      nombre: formUser.nombre,
      email: formUser.email,
      isAdmin: formUser.rol === "Admin"
    })
  }

  return (
    <div>
      <h2> Registarse: </h2>
      <h3>Nombre de usuario: {user && <b>{user.nombre}</b>}</h3>
      
      <div className="content">
        <form className="contentForm" onSubmit={handleLogin}>

          <div className="formRow">
            <label htmlFor="username">Nombre</label>
            <input
              type="text"
              id="username"
              name="nombre"
              placeholder="Ingrese el nombre"
              value={formUser.nombre}
              onChange={handlChange}
            />
          </div>

          <div className="formRow">
            <label htmlFor="email">Correo</label>
            <input
              className="inputs"
              type="email"
              id="email"
              name="email"
              placeholder="Ingrese el correo"
              value={formUser.email}
              onChange={handlChange}
            />
          </div>

          <div className="formRow">
            <label htmlFor="rol">Rol:</label>
            <select
              id="rol"
              name="rol"
              value={formUser.rol}
              onChange={handlChange}
            >
              <option value= 'opcion'>Seleccione una opcion</option>
              <option value= 'Admin'>Admin</option>
              <option value= 'Usuario'>Usuario</option>
              <option value= 'invitado'>Invitado</option>
            </select>
          </div>

          <div className="formRow">
            <button type="submit"> Iniciar sesion </button>
            <button type="button" onClick={() => logoutUser()}> Cerrar sesion </button>
          </div>
        </form>
      </div>

    </div>
  )
}

export default RegisterSettings