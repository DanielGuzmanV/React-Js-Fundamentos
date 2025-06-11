import { useContext, useEffect, useState } from "react"
import HeaderComponent from "../components/HeaderComponent"
import PostCard from "../components/PostCard";
import { HomeContext } from "../context/home_context";

function LinksHomePage() {
  const {posts, valueError, getPosts} = useContext(HomeContext)

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
        <h2 style={{color: 'blue'}}>Home Page Links</h2>
        {valueError ? (
            <h2> Algo salio mal en la peticion... </h2>
          ) : !valuePostCards.length ? (
              <h2> Cargando pagina... </h2>
          ) : (
            <ul>{valuePostCards}</ul>
          )
        }


      </section>
    </>
  )
}

export default LinksHomePage