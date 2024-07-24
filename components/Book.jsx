import React from 'react'
import Nav from './Nav'
import { useSelector } from 'react-redux'

function Book() {
  let {finalProducts} = useSelector((store)=>store.task)
  console.log(finalProducts);
  return (
    <div className='book'>
        <Nav/>

        <div className='container'>
          {finalProducts.map((i)=>{
            return(
              <div className='bookProduct'>
                <img src={i.img} alt="" />
              </div>
             
            )
          })}
        </div>
        {finalProducts.length>0?<button >Book now</button>:<h1>Select something to Book</h1>}
        


    </div>
  )
}

export default Book