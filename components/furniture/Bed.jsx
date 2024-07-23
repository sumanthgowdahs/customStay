import React, { useState } from 'react'
import { beds } from '../../data'
import { addItemsBeds } from '../../slics'
import { useDispatch } from 'react-redux'


function Bed() {
    let dispatch = useDispatch()
    let [icon, setIcon] = useState({})

    function buttonClick(itemId) {
        let item = beds.filter((i) => {
            return i.id === itemId
        })
        dispatch(addItemsBeds(item))
        setIcon((pState) => ({
            ...pState,
            [itemId]: true
        }))
    }


    return (
        <div className='component'>
            <div className="componentHeading">
                <h1>Beds</h1>
            </div>
            <div className="itemList">
                {beds.map((bed) => {
                    return (
                        <div key={bed.id} className="card">
                            <div className="img">
                                <img src={bed.img} alt="" />
                            </div>
                            <div className="info">
                                <h4>Name: {bed.name}</h4>
                                <h4>Confort: {bed.comfort}</h4>
                                <h4>Rs <span>{bed.price}</span> </h4>

                                <button onClick={() => {
                                    buttonClick(bed.id)
                                }}>
                                    {icon[bed.id]?<i class="fa-solid fa-check"></i> : <i class="fa-solid fa-plus"></i>}
                                </button>

                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default Bed