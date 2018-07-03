import React from 'react'
import { withRouteData, Link } from 'react-static'

export default withRouteData(({ posts }) => (
  <div>
    <h1>It's blog time.</h1>
    <br />
    All Posts:
    <ul>
      {posts
        .sort((a, b) => (new Date(b.date) - new Date(a.date)))
        .map(post => (
          <li key={post.slug}>
            <Link to={`/post/${post.slug}/`}>{post.title}</Link>
          </li>
      ))}
    </ul>
  </div>
))
