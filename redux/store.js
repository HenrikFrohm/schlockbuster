import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//redux store, containing cartReducer
export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
