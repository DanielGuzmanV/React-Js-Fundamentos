import { useContext, useEffect, useState } from "react"
import HeaderComponent from "../components/HeaderComponent"
import PostCard from "../components/PostCard";
import { HomeContext } from "../context/home_context";
import { UserContext } from "../context/user_context";

function LinksHomePage() {
  const {posts, valueError, getPosts} = useContext(HomeContext)
  const {user, setDataUser, loginUser, logoutUser} = useContext(UserContext)

  useEffect(() => {
    getPosts();
  },[])

  const valuePostCards = posts. map( (valuePost) => {
    return (
      <li key={valuePost.id}>
        <PostCard posts={valuePost}/>
      </li>
    )
  })

  return (
    <>
      <HeaderComponent/>
      <section>
        <h2 style={{color: 'red'}} data-testid="homePageTitle">Home Page Links</h2>

        <p>Nombre de usuario: {user && <b>{user.nombre}</b>}</p>

        <button onClick={() => loginUser()}> Iniciar sesion </button>
        <button onClick={() => logoutUser()}> Cerrar sesion </button>
        
        {valueError ? (
            <h2 data-testid="error-msg"> Algo salio mal en la peticion... </h2>
          ) : !valuePostCards.length ? (
              <h2 data-testid="loading-msg"> Cargando pagina... </h2>
          ) : (
            <ul>{valuePostCards}</ul>
          )
        }


      </section>
    </>
  )
}

export default LinksHomePage