import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

//redux store, containing cartReducer and holding application state inside. Will be imported in _app.js.
export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});
