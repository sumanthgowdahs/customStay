import React from 'react'
import { tv } from '../../data'

function TV() {
  return (
    <div className='component'>
    <div className="componentHeading">
        <h1>Televisions</h1>
    </div>
    <div className="itemList">
        {tv.map((item) => {
            return (
                <div className="card">
                    <div className="img">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="info">
                        <h4>Name: {item.name}</h4>
                        <h4>Size: {item.size} inches</h4>
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

export default TV