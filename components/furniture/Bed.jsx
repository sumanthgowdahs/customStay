import React from 'react'
import { beds } from '../../data'


function Bed() {
    return (
        <div className='component'>
            <div className="componentHeading">
                <h1>Beds</h1>
            </div>
            <div className="itemList">
                {beds.map((bed) => {
                    return (
                        <div className="card">
                            <div className="img">
                                <img src={bed.img} alt="" />
                            </div>
                            <div className="info">
                                <h4>Name: {bed.name}</h4>
                                <h4>Confort: {bed.comfort}</h4>
                                <h4>Rs <span>{bed.price}</span> </h4>

                                <button>A</button>

                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Bed