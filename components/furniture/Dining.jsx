import React from 'react'
import { diningTables } from '../../data'

function Dining() {
  return (
    <div className='component'>
    <div className="componentHeading">
        <h1>Dining Table</h1>
    </div>
    <div className="itemList">
        {diningTables.map((table) => {
            return (
                <div className="card">
                    <div className="img">
                        <img src={table.img} alt="" />
                    </div>
                    <div className="info">
                        <h4>Shape: {table.shape}</h4>
                        <h4>Size: {table.size}</h4>
                        <h4>Seating: {table.seating}</h4>
                        <h4>Rs <span>{table.price}</span> </h4>
                        <button>A</button>

                    </div>

                </div>
            )
        })}
    </div>

</div>
  )
}

export default Dining