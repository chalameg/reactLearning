import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
   <>
    <div>Home</div>
    <p>
      Go to <Link to='/products'>Products Page</Link> 
    </p>
   </>
  )
}

export default Home