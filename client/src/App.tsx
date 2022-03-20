import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { RootState } from './app/store';
import ReservationCard from './components/ReservationCard';
import CustomerCard from './components/CustomerCard';
import { addReservation } from './features/reservationSlice';

function App() {
  const [reservationNameInput, setreservationNameInput] = useState('')
  const reservations = useSelector((state: RootState) => state.reservations.value)
  const customers = useSelector((state: RootState) => state.customer.value)
  const dispatch = useDispatch()

  const handleAddReservations = () => {
    if(!reservationNameInput) return
    dispatch(addReservation(reservationNameInput))
    setreservationNameInput('')
  }

  return (
   <>
    <div className='App'>
      <div className='container'>
        <div className='reservation__container'>
          <div>
            <h3 className='reservation__header'> Reservations</h3>
            <div className='reservation__cards-container'>
              {reservations.map((name, i) => <ReservationCard key={name} index={i} name={name} /> )}
            </div>
          </div>
            <div className='reservation__input-container'>
              <input
                name="reservationNameInput"
                value={reservationNameInput}
                onChange={(e)=> setreservationNameInput(e.target.value)}
              />
              <button
                onClick={handleAddReservations}
              >Add</button>
            </div>
        </div>
          <div className='customer-food__container'>
           {customers.map(customer => <CustomerCard />)}
          </div>
      </div>
    </div>
   </>
  );
}

export default App;
