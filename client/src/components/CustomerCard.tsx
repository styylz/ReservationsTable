import React from 'react'

interface CustomerCardTypes {
    id: string;
    name: string;
    food: string[]
  }
function CustomerCard({id, name, food}: CustomerCardTypes) {

  return (
    <div className='customer-food__card-container'>
    <h3>{name}</h3>
    <div className='customer-foods__container'>
      <div className='customer-foods__food'>
        {food.map(x => <p>{x}</p>)}
      </div>
      <div className='customer-food__input-container'>
        <input/>
        <button>Add</button>
      </div>
   </div>
  </div>
  )
}

export default CustomerCard