import React from 'react'
import "./Subtotal.css"
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './reducer';

export default function Subtotal() {
const [{ basket },  dispatch] = useStateValue();
  return (


    <div className="subtotal"> 
<p>
  Subtotal ({basket.length} items) : <strong>${getBasketTotal(basket)}</strong>
</p>
<small className="subtotal__gift">
   <input type="checkbox" /> This order contains a gift
</small>
     <button>Proceed to checkout</button>
    </div>
  )
}
