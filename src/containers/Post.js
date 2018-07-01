import React from 'react'
import { withRouteData, Link } from 'react-static'
import convert from 'htmr'
//

export default withRouteData(({ post }) => (
  <div>
    <Link to="/">{'<'} Back</Link>
    <br />
    <h1>{post.title}</h1>
    <p>{post.date}</p>
    <hr />
    <br />
    {convert(post.contents)}
  </div>
))
