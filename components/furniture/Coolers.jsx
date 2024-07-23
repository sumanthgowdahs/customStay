import React from 'react'
import { coolers } from '../../data'

function Coolers() {
  return (
    <div className='component'>
            <div className="componentHeading">
                <h1>Appliances</h1>
            </div>
            <div className="itemList">
                {coolers.map((fan) => {
                    return (
                        <div className="card">
                            <div className="img">
                                <img src={fan.img} alt="" />
                            </div>
                            <div className="info">
                                <h4>Name: {fan.name}</h4>
                                <h4>Type: {fan.type}</h4>
                                <h4>Rs <span>{fan.price}</span> </h4>

                                <button>A</button>

                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
  )
}

export default Coolers