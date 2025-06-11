import { useEffect, useState } from "react"
import HeaderComponent from "../components/HeaderComponent"
import PostCard from "../components/PostCard";

function LinksHomePage() {
  const [posts, setPosts] = useState([]);
  const [valueError, setError] = useState(false);

  const getPosts = async() => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      console.log(data);
      setPosts(data);
      
    } catch (error) {
      setError(true);
    }
  }

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