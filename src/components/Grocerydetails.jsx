import React from "react"
import data from '../data.json'
import CartButton from "./CartButton"


const GroceryDetails = (parse) =>{
console.log(data)



    return(
        <>
        <h1>Groceries</h1>
       
        <div className="container">
            {/* map through the data and display the cards */}
           {
               data.map(({id,title,imgURL,mrp,sellingPrice})=>{
                  return(
                      <>
                      <div className="elemDiv">
                      <img src={imgURL} alt=""/>
                      <h6>{title}</h6>
                      <div style={{display:"flex",gap:"10px"}}>
                      <p>{sellingPrice}</p>
                      <p style={{textDecoration: "line-through"}}>M.R.P {mrp}</p>
                     
                      </div>
                      <button className="btn btn-" onClick={()=>{<CartButton/>}}>Add to Card</button>
                      <div ><CartButton/></div>
                      </div>
                    </>
                  ) 
               })
           }
           
        </div>
        </>
    )
}
export default GroceryDetails