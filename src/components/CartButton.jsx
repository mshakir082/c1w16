import { useState } from "react";
// keep the add to cart component here
const CartButton = () => {


    //manage state of the count 
    const[count,setCount]=useState(0);

    const hundelcount=(task)=>{

      if(count>0){
        setCount(count-task);
      }
      else{
        setCount(0);
      }
    }

  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  {count==0?<button className="btn btn-" onClick={()=>{<CartButton/>}}>Add to Card</button>:
  <p className="count-details">{count}</p>}
  
  <div style={{display:"flex",height:"20px",marginLeft:"170px"}}>
      <button onClick={()=>{hundelcount(1)}}>-</button>
      <button onClick={()=>{setCount(count+1)}}>+</button>

  </div>
  </>
}
export default CartButton
