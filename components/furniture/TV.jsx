import React, { useState } from 'react'
import { tv } from '../../data'
import { addItemsTv, totalCartCount } from '../../slics'
import { useDispatch, useSelector } from 'react-redux'

function TV() {
    let { cart } = useSelector((store) => store.task)

    let dispatch=useDispatch()
    let [icon,setIcon]= useState({})

    function buttonClick (itemsId) {
        let item = tv.filter((i)=>{
            return i.id == itemsId
        })
        let res = cart.tv.some((i)=>i.id===itemsId)
        if(!res){
            dispatch(addItemsTv(item))
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
        <h1>Televisions</h1>
    </div>
    <div className="itemList">
        {tv.map((item) => {
            return (
                <div key={item.id} className="card">
                    <div className="img">
                        <img src={item.img} alt="" />
                    </div>
                    <div className="info">
                        <h4>Name: {item.name}</h4>
                        <h4>Size: {item.size} inches</h4>
                        <h4>Rs <span>{item.price}</span> </h4>
                        <button onClick={()=>{buttonClick(item.id)}}>
                        {icon[item.id]?<i class="fa-solid fa-check"></i> : <i class="fa-solid fa-plus"></i>}
                        </button>

                    </div>

                </div>
            )
        })}
    </div>

</div>
  )
}

export default TV