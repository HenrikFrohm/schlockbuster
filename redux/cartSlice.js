import { createSlice } from "@reduxjs/toolkit";

//createslice function. Accepts a configuration object parameter, with options such as name, initial state and object of reducer functions
const cartSlice = createSlice({
  name: "cart",
  //state at the beginning
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  //most important redux concept, reducers take current state and an action - an event that describes something that happened in the application - as arguments and returns a new state result. Passing products as a payload
  //An action object can have other fields with additional information about what happened, that gets put in payload.
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.quantity += 1;
      state.total += action.payload.price * action.payload.quantity;
    },
    //back to initial state, cart gets reset to 0 after payment
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
    },
  },
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;
