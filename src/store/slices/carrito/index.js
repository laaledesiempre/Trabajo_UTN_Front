import { createSlice } from "@reduxjs/toolkit";

export const carritoSlice = createSlice({
  name: "Carrito",
  initialState: {
    Productos: [],
  },
  reducers: {
    addToCarrito: (state, action) => {
      state.Productos = [...Productos, action];
    },
  },
});

export const { addToCarrito } = carritoSlice.actions;

export const carritoReducer = carritoSlice.reducer;

export const AgregarAlCarrito = (element) => (dispatch) => {
    dispatch(addToCarrito(element));
  };