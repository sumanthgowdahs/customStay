import React, { useState } from 'react'
import { diningTables } from '../../data'
import { addItemsDining, totalCartCount } from '../../slics'
import { useDispatch, useSelector } from 'react-redux'

function Dining() {
    let {cart}= useSelector((store)=>store.task)
    let dispatch = useDispatch()
    let [icon,setIcon] = useState({})
    function buttonClick(itemId) {
        let item = diningTables.filter((i) => {
            return i.id === itemId
        })
        let res = cart.dining.some((i)=>i.id===itemId)
        if(!res){
            dispatch(addItemsDining(item))
            dispatch(totalCartCount())
    
            setIcon((pState) => ({
                ...pState,
                [itemId]: true
            }))
        }
        
    }

    
  return (
    <div className='component'>
    <div className="componentHeading">
        <h1>Dining Table</h1>
    </div>
    <div className="itemList">
        {diningTables.map((table) => {
            return (
                <div key={table.id} className="card">
                    <div className="img">
                        <img src={table.img} alt="" />
                    </div>
                    <div className="info">
                        <h4>Shape: {table.shape}</h4>
                        <h4>Size: {table.size}</h4>
                        <h4>Seating: {table.seating}</h4>
                        <h4>Rs <span>{table.price}</span> </h4>
                        <button onClick={()=>{
                            buttonClick(table.id)
                        }}>
                            {icon[table.id]?<i class="fa-solid fa-check"></i> : <i class="fa-solid fa-plus"></i>}
                        </button>

                    </div>

                </div>
            )
        })}
    </div>

</div>
  )
}

export default Dining