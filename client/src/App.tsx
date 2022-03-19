import React from 'react';
import './App.css';

function App() {
  return (
   <>
    <div className='App'>
      <div className='container'>
        <div className='reservation__container'>
          <div>
            <h2 className='reservation__header'> Reservations</h2>
            <div className='reservation__cards'>
              <div className='reservation__card-container'>
                <p> Name</p>
              </div>
            </div>
            <div className='reservation__input-container'>
              <input/>
              <button>Add</button>
            </div>
          </div>
          <div className='customer-food__container'>
            <div className='customer-foods__card-container'>
              <h3>Name</h3>
              <div className='customer-foods__food'>
                <p>Cake</p>
              </div>
              <div className='customer-foods__input-container'>
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
