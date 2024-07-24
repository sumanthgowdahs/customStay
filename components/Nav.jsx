import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


function Nav() {
    let {totalCartCount} = useSelector((store)=>store.task)
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
        <button>
        <i class="fa-solid fa-cart-shopping"></i>
        <h6>{totalCartCount}</h6>
        </button>
    </div>
   </nav>
  )
}

export default Nav