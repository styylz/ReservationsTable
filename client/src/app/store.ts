import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "../features/reservationSlice"


export const store = configureStore({
    reducer: {
        reservations: reservationReducer
    }
})

// exporting state and type of our state, by typing type
// we can get access to type of state
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch