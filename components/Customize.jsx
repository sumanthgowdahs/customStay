import React, { useState } from 'react'
import Nav from './Nav'
import { useDispatch, useSelector } from 'react-redux'
import { customItems, customItemDelete, totalCartCount } from '../slics'

function Customize() {
  let { cart, finalProducts } = useSelector((store) => store.task)
  let dispatch = useDispatch()
  let [dragItem, setDragItem] = useState()

  //& when dragging the item
  function draggingItem(id, name) {

    let i = []
    if (name == "house") {
      i = cart.House.find((item) => {
        return item.id === id
      })
    }
    else if (name == "beds") {
      i = cart.beds.find((item) => {
        return item.id === id
      })
    }
    else if (name == "dining") {
      i = cart.dining.find((item) => {
        return item.id === id
      })
    }
    else if (name == "tv") {
      i = cart.tv.find((item) => {
        return item.id === id
      })
    }
    else if (name == "fans") {
      i = cart.cooler.find((item) => {
        return item.id === id
      })
    }


    setDragItem(i)


  }
  //& while droping the item
  function dropingItem() {
    if(finalProducts.length<=4){
      dispatch(customItems(dragItem))
    }
    else{
      console.log("linit reached");
    }

  }

  let dragOver = (e) => {
    e.preventDefault()
  }
// & removing the items
  function ItemRemove(index) {
    console.log(finalProducts);
    let res = finalProducts.filter((i, n) => {
      return n !== index
    })
    dispatch(customItemDelete(res))
    console.log(finalProducts);

  }

// & total amount 
let TotalAmount = finalProducts.reduce((a,b,c)=>{
  return a+b.price
},0)
// console.log(TotalAmount);


  return (
    <div className='customize'>

      <Nav />
      <div className="container">

        {/* cartitems */}
        <div className="cartItems">
          <h1>Cart</h1>
          {/* House */}
          <div className="House">
            <div className='itemName'>House</div>
            {cart.House.length==0?<h6>------</h6>:''}
            {cart.House.map((h) => {
              return (
                <p draggable={true} onDragStart={() => { draggingItem(h.id, "house") }}>
                  <img src={h.img} alt="" />
                  Rs {h.price}
                </p>
              )
            })}
          </div>

          {/* beds */}
          <div >
            <div className='itemName'>Beds</div>
            {cart.beds.length==0?<h6>------</h6>:''}
            {cart.beds.map((h) => {
              return (
                <p draggable={true} onDragStart={() => { draggingItem(h.id, "beds") }} >
                  <img src={h.img} alt="" />
                  Rs {h.price}
                </p>
              )
            })}
          </div>

          {/* Dining table */}
          <div >
            <div className='itemName'>Dining</div>
            {cart.dining.length==0?<h6>------</h6>:''}
            {cart.dining.map((h) => {
              return (
                <p draggable={true} onDragStart={() => { draggingItem(h.id, "dining") }} >
                  <img src={h.img} alt="" />
                  Rs {h.price}
                </p>
              )
            })}
          </div>
          {/* tv */}
          <div >
            <div className='itemName'>Tv's</div>
            {cart.tv.length==0?<h6>------</h6>:''}
            {cart.tv.map((h) => {
              return (
                <p draggable={true} onDragStart={() => { draggingItem(h.id, "tv") }} >
                  <img src={h.img} alt="" />
                  Rs {h.price}
                </p>
              )
            })}
          </div>

          {/* Appliances */}
          <div >
            <div className='itemName'>Appliances</div>
            {cart.cooler.length==0?<h6>------</h6>:''}
            {cart.cooler.map((h) => {
              return (
                <p draggable={true} onDragStart={() => { draggingItem(h.id, "fans") }} >
                  <img src={h.img} alt="" />
                  Rs {h.price}
                </p>
              )
            })}
          </div>







        </div>
        {/* customize section */}
        <div className="finalProduct">

          <div className="product" onDragOver={dragOver} onDrop={dropingItem}>
            {finalProducts.length==0? (<h3>Drap and Drop the items from the cart</h3>):(

            
            finalProducts.map((i, index) => {
              return (
                <div className='productInfo'>
                  <button onClick={() => { ItemRemove(index) }}><i class="fa-solid fa-trash"></i></button>
                  <img src={i.img} alt="" />
                  <h4>Rs {i.price}</h4>
                </div>
              )
            })
          )}
          </div>
          <h2>Total Amount: Rs <span>{TotalAmount}</span> </h2>
        </div>
      </div>
    </div>
  )
}

export default Customize