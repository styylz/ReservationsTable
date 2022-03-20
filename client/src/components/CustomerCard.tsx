import React from 'react'

function CustomerCard() {

  return (
    <div className='customer-food__card-container'>
    <h3>Name</h3>
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