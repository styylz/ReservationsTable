import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addFoodToCustomer } from '../features/customerSlice';

interface CustomerCardTypes {
    id: string;
    name: string;
    food: string[]
  }
function CustomerCard({id, name, food}: CustomerCardTypes) {

  const [customerInput, setCustomerInput] = useState('')
  const dispatch = useDispatch()

  return (
    <div className='customer-food__card-container'>
    <h3>{name}</h3>
    <div className='customer-foods__container'>
      <div className='customer-foods__food'>
        {food.map(x => <p>{x}</p>)}
      </div>
      <div className='customer-food__input-container'>
        <input
          value={customerInput}
          onChange={(e) => setCustomerInput(e.target.value)}
        />
        <button
          onClick={()=> {
            if(!customerInput) return

            dispatch(addFoodToCustomer({
              id,
              food: customerInput
             })
             )
             setCustomerInput("")
        }}
        >Add</button>
      </div>
   </div>
  </div>
  )
}

export default CustomerCard