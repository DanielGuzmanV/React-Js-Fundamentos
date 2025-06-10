import { useEffect, useState } from "react"
import HeaderComponent from "../components/HeaderComponent"
import PostCard from "../components/PostCard";

function LinksHomePage() {
  const [posts, setPosts] = useState([]);

  const getPosts = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);

    setPosts(data);
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

        <ul>
          {valuePostCards}
        </ul>

      </section>

    </>
  )
}

export default LinksHomePage