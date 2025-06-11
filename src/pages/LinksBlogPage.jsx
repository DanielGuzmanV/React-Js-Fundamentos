import { Link } from "react-router-dom"
import HeaderComponent from "../components/HeaderComponent"
import { useContext } from "react"
import { UserContext } from "../context/user_context"

function LinksBlogPage() {
  const {user, setDataUser, loginUser, logoutUser} = useContext(UserContext)

  return (
    <>
      <HeaderComponent/>
      <h2 style={{color: 'blue'}}>Blog page Links</h2>

      <h3> Registarse: </h3>
      <p>Nombre de usuario: {user && <b>{user.nombre}</b>}</p>

      <button onClick={() => loginUser()}> Iniciar sesion </button>
      <button onClick={() => logoutUser()}> Cerrar sesion </button>
      
      <ul>
        <h3>Lista del blog</h3>
        <li>
          <a href="https://www.youtube.com" target="_blank">Ir a youtube</a>
        </li>
        <li>
          <a href="https://www.google.com" target="_blank">Ir a google</a>
        </li>
      </ul>
    </>
  )
}

export default LinksBlogPage