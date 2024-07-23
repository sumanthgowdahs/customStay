import React from 'react'
import { useNavigate } from 'react-router-dom'
import Rooms from './Rooms'

function Home() {
    let navigate = useNavigate()
  return (
    <div className='app'>
        <nav>
            <h1>CutomStay</h1>
        </nav>
        <div className="box1">
            <h1>Design and Personalize Your Stay with Our Customizable Rooms and Unmatched Hospitality</h1>
        </div>
        <div className="box2">
            <img src="https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_1280.jpg" alt="" />
            <h1>Beautifully decorated rooms with tasteful furnishings and elegant decor provide a visually pleasing environment</h1>
        </div>
        <div className="box2">
            <img src="https://cdn.pixabay.com/photo/2018/09/15/18/24/historical-3680044_1280.jpg" alt="" />
            <h1>Experience the perfect family getaway with our spacious rooms, family-friendly amenities, and exclusive discounts for children. Book now and create unforgettable memories with your loved ones!</h1>
        </div>
        <button onClick={()=>{
            navigate('/rooms')
        }}>Get Started</button>
        
    </div>
  )
}

export default Home