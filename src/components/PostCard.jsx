
function PostCard(props) {
  const {posts} = props;

  return (
    <article>
      <h3>{posts.title}</h3>
      <p>{posts.body}</p>
    </article>
  )
}

export default PostCard