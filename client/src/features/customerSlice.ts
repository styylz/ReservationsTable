import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CustomerState {
    value: Customer[];
}

interface Customer {
    id: string,
    name: string,
    food: string[]
}

interface AddFoodToCustomer {
    id: string;
    food: string;
}

const initialState: CustomerState = {
    value: []
}

const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload)
        },
        addFoodToCustomer: (state, action: PayloadAction<AddFoodToCustomer>) => {
            state.value.forEach((customer) => {
                if (customer.id === action.payload.id) {
                    customer.food.push(action.payload.food)
                }
            })
        },
    }
});

export const { addCustomer, addFoodToCustomer } = customerSlice.actions

export default customerSlice.reducer