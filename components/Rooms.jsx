import React, { useState } from 'react'
import Bed from './furniture/Bed'
import Dining from './furniture/Dining'
import Coolers from './furniture/Coolers'
import TV from './furniture/TV'
import House from './furniture/House'
import Nav from './Nav'

function Rooms() {
  let [addItem,setAddItem]= useState()
  return (
    <div className='rooms'>
        <Nav/>
        <div className="heading">
        <h1>Select your preferred furniture to customize your room to your liking</h1>
        </div>
        <House/>
        <Bed/>
        <Dining/>
        <Coolers/>
        <TV/>
        
    </div>
  )
}

export default Rooms