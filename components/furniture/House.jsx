import React from 'react'
import { rooms } from '../../data'

function House() {
  return (
    <div className='component'>
    <div className="componentHeading">
        <h1>House</h1>
    </div>
    <div className="itemList">
        {rooms.map((item) => {
            return (
                <div className="card">
                    <div className="img">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="info">
                        <h4>Size: {item.size} sq ft</h4>
                        <h4>Bed Rooms: {item.numberOfBedrooms} sq ft</h4>
                        <h4>Rs <span>{item.price}</span> </h4>
                        <button>A</button>

                    </div>

                </div>
            )
        })}
    </div>

</div>
  )
}

export default House