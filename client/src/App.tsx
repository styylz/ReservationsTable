import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { RootState } from './app/store';

function App() {
  const reservations = useSelector((state: RootState) => state.reservations.value)
  console.log(reservations)
  return (
   <>
    <div className='App'>
      <div className='container'>
        <div className='reservation__container'>
          <div>
            <h3 className='reservation__header'> Reservations</h3>
            <div className='reservation__cards-container'>
              <div className='reservation__card-container'>
                <p> Name</p>
              </div>
            </div>
          </div>
            <div className='reservation__input-container'>
              <input/>
              <button>Add</button>
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
