import { configureStore } from "@reduxjs/toolkit";
import { carritoReducer } from "./slices/carrito";


export const store = configureStore({
  reducer: {
    carritoReducer,
  },
});