import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { RootState } from './app/store';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './features/reservationSlice';

function App() {
  const [reservationNameInput, setreservationNameInput] = useState('')
  const reservations = useSelector((state: RootState) => state.reservations.value)
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
              {reservations.map(name => <ReservationCard key={name} name={name} /> )}
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
          </div>



      </div>
    </div>
   </>
  );
}

export default App;
