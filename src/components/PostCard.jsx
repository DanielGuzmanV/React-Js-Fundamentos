import React from "react";
import { Link } from "react-router-dom";

function PostCard(props) {
  console.log('Postcard renderizando')
  const {posts} = props;

  return (
    <article>
      <h3>
        <Link to={`/linksHome/${posts.id}`}>{posts.title}</Link>
      </h3>
      <p>{posts.body}</p>
    </article>
  )
}

export default React.memo(PostCard); 