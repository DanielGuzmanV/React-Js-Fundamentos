import { useState } from "react";

function PageFormularios() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  })

  const handleUsernameInput = (event) => {
    setUser({...user, username: event.target.value});
  }

  const handlePasswordInput = (event) => {
    setUser({...user, password: event.target.value});
  }


  const handleSubmit = (event) => {
    // Evitamos que la pagina se cargue nuevamente:
    event.preventDefault();

    if(user.username.trim() === "" || user.password.trim() === "") {
      alert('Ingrese los datos en los inputs.')
      return;
    }

    console.log(user);
    console.log('El formulario fue enviado.')
  }

  // Estilos para el fieldset:
  const style = {
    margin: '20px',
    padding: '15px'
  }

  return (
    <div>
      <h2> Formularios </h2>

      <form onSubmit={handleSubmit}>
        <fieldset style={style}>
          <label htmlFor="nameuser"> Usuario: </label>
          <input 
            type="text" 
            id="nameuser"
            onChange={handleUsernameInput}
            value={user.username}
          />
        </fieldset>

        <fieldset style={style}>
          <label htmlFor="password"> Contraseña: </label>
          <input 
            type="password" 
            id="password"
            onChange={handlePasswordInput}
            value={user.password}
          />
        </fieldset>

        <button>Enviar</button>

      </form>
    
        <button onClick={() => setUser({username: "", password: ""})}>
          Login
        </button>
    
    </div>

    
  )
}

export default PageFormularios