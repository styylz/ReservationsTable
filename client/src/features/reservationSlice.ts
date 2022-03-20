import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface ReservationState {
    value: string[]
}

const initialState: ReservationState = {
    value: []
}

export const reservationSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        addReservation: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        }
    }
})

// export addReservation to access it from another place
export const { addReservation } = reservationSlice.actions
export default reservationSlice.reducer