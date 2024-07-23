import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
   <nav className='nav'>
    <div className="logo">
        <h1>CutomStay</h1>
    </div>
    <div className="links">
    <Link to={"/rooms"}>Select</Link>
    <Link to={"/costomize"}>costomize</Link>
    <Link to={"/book"}>Book</Link>
    </div>
    <div className="cart">
        <button>cart</button>
    </div>
   </nav>
  )
}

export default Nav