import { useParams } from "react-router-dom"
import HeaderComponent from "../components/HeaderComponent"
import { useEffect, useState } from "react";

function PostDetails() {
  const {id} = useParams();
  const [posts, setPosts] = useState();

  const fetchPost = async (paramID) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${paramID}`);
    const data = await response.json();
    
    setPosts(data);
  }

  useEffect(() => {
    fetchPost(id);
  }, []);

  return (
    <>
      <HeaderComponent></HeaderComponent>
      {posts && (
        <section>
          <h2>ID = {posts.id} : {posts.title}</h2>
          <p>{posts.body}</p>
        </section>
      )}
    </>
  )
}

export default PostDetails

