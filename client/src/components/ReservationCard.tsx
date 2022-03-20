import React from 'react'
import { useDispatch } from 'react-redux';
import { addCustomer } from '../features/customerSlice';
import { removeReservation } from '../features/reservationSlice';

interface ReservationCardTypes {
  name: string;
  index: number;
}
function ReservationCard({name, index}: ReservationCardTypes) {

  const dispatch = useDispatch()

  return (
   <div
     className='reservation__card-container'
     onClick={() => {
       dispatch(removeReservation(index))
       dispatch(addCustomer({
         id: Date.now().toString(),
         name: name,
         food: []
       }))
      }}
     >
      <p>{name}</p>
   </div>
  )
}

export default ReservationCard
