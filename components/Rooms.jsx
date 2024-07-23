import React, { useState } from 'react'
import Bed from './furniture/Bed'

function Rooms() {
  let [addItem,setAddItem]= useState()
  return (
    <div className='rooms'>
        <div className="heading">
        <h1>Select your preferred furniture to customize your room to your liking</h1>
        </div>
        <Bed/>
        
    </div>
  )
}

export default Rooms