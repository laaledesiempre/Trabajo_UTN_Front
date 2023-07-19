import { configureStore } from "@reduxjs/toolkit";
import { carritoReducer } from "./slices/carrito";
import { filtersReducer } from "./slices/filters";


export const store = configureStore({
  reducer: {
    carritoReducer,
    filtersReducer
  },
});
