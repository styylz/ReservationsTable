import { createSlice } from "@reduxjs/toolkit";

interface CustomerState {
    value: Customer[];
}

interface Customer {
    id: string,
    name: string,
    food: string[]
}

const initialState: CustomerState = {
    value: []
}

const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {}
});


export default customerSlice.reducer