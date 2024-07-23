import React, { useState } from 'react'
import { coolers } from '../../data'
import { addItemsCooler, totalCartCount } from '../../slics'
import { useDispatch, useSelector } from 'react-redux'

function Coolers() {
    let { cart } = useSelector((store) => store.task)

    let dispatch = useDispatch()
    let [icon,setIcon]= useState({})
    function buttonClick (itemsId) {
        let item = coolers.filter((i)=>{
            return i.id == itemsId
        })
        let res = cart.cooler.some((i)=>i.id===itemsId)
        if(!res){
            dispatch(addItemsCooler(item))
            dispatch(totalCartCount())
            setIcon((pState)=>({
                ...pState,
                [itemsId]:true
            }))
        }
        
    }
  return (
    <div className='component'>
            <div className="componentHeading">
                <h1>Appliances</h1>
            </div>
            <div className="itemList">
                {coolers.map((fan) => {
                    return (
                        <div key={fan.id} className="card">
                            <div className="img">
                                <img src={fan.img} alt="" />
                            </div>
                            <div className="info">
                                <h4>Name: {fan.name}</h4>
                                <h4>Type: {fan.type}</h4>
                                <h4>Rs <span>{fan.price}</span> </h4>

                                <button onClick={()=>{buttonClick(fan.id)}}>
                                {icon[fan.id]?<i class="fa-solid fa-check"></i> : <i class="fa-solid fa-plus"></i>}
                                </button>

                            </div>

                        </div>
                    )
                })}
            </div>

        </div>
  )
}

export default Coolers