import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;

  const post = useSelector((state) =>
    state.posts.find((post) => `${post.id}` === postId)
  )

  if (!post) (<h2>Post not found!</h2>)

  return (
    <section>
      <article className="post">
        <h2>ID: {post.id}</h2>
        <div>
          <img src={post.url} alt={post.id} />
        </div>
        <p className="post-content">{post.price}$</p>
        <Link to={`/editPost/${post.id}`}>
          Back
        </Link>
      </article>
    </section>
  )
}
