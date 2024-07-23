import React, { useState } from 'react'
import { rooms } from '../../data'
import { useDispatch, useSelector } from 'react-redux'
import { addItemsHouse, totalCartCount } from '../../slics'


function House() {
    let dispatch = useDispatch()
    let { cart } = useSelector((store) => store.task)
    let [icon, setIcon] = useState({})

    function buttonClick(itemsId) {
        console.log(cart.House);

        let item = rooms.filter((i) => {
            return i.id == itemsId
        })
        let res = cart.House.some((i) => {
            return i.id === itemsId
        })
        if(!res){
            dispatch(addItemsHouse(item))
            dispatch(totalCartCount())
            setIcon((pState) => ({
                ...pState,
                [itemsId]: true
            }))
        }
        
    }




    return (
        <div className='component'>
            <div className="componentHeading">
                <h1>House</h1>
            </div>
            <div className="itemList">
                {rooms.map((item) => {
                    return (
                        <div key={item.id} className="card">
                            <div className="img">
                                <img src={item.img} alt="" />
                            </div>
                            <div className="info">
                                <h4>Size: {item.size} sq ft</h4>
                                <h4>Bed Rooms: {item.numberOfBedrooms} sq ft</h4>
                                <h4>Rs <span>{item.price}</span> </h4>
                                <button onClick={() => {
                                    buttonClick(item.id)
                                }}>{icon[item.id] ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-plus"></i>}</button>

                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default House