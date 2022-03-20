import React from 'react'
import { useDispatch } from 'react-redux';
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
     onClick={() => dispatch(removeReservation(index))}
     >
      <p>{name}</p>
   </div>
  )
}

export default ReservationCard
