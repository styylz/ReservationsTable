import React from 'react'

interface ReservationCardTypes {
  name: string
}
function ReservationCard({name}: ReservationCardTypes) {
  return (
   <div className='reservation__card-container'>
      <p>{name}</p>
   </div>
  )
}

export default ReservationCard
