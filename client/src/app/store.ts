import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        //slices will be added later on
    }
})

// exporting state and type of our state, by typing type
// we can get access to type of state
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch