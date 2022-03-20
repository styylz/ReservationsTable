import React from 'react'

interface CustomerCardTypes {
    key: string
    name: string;
  }
function CustomerCard({name}: CustomerCardTypes) {

  return (
    <div className='customer-food__card-container'>
    <h3>{name}</h3>
    <div className='customer-foods__container'>
      <div className='customer-foods__food'>
        <p>Cake</p>
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