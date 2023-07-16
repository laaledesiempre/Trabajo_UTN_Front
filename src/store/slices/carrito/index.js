import { createSlice } from "@reduxjs/toolkit";

export const carritoSlice = createSlice({
  name: "Carrito",
  initialState: {
    Productos: [
      {
        id: 0,
        name: "Empanada de lenteja",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Empanada",
        quantity: 0,
        price: 20
      }, {
        id: 1,
        name: "Empanada de verdura",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Empanada",
        quantity: 0,
        price: 20
      }, {
        id: 2,
        name: "Empanada de Jamon de arroz y queso",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Empanada",
        quantity: 0,
        price: 20

      }, {
        id: 8,
        name: "Empanada de Capresse",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Empanada",
        quantity: 0,
        price: 20

      }, {
        id: 3,
        name: "Empanada de Zapallo",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Empanada",
        quantity: 0,
        price: 20

      }, {
        id: 4,
        name: "Empanada de Cebolla y queso",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Empanada",
        quantity: 0,
        price: 20

      }, {
        id: 5,
        name: "Empanada de Carne de soja picante",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Empanada",
        quantity: 0,
        price: 20

      }, {
        id: 6,
        name: "Empanada de Hummus",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Empanada",
        quantity: 0,
        price: 20

      }, {
        id: 7,
        name: "Empanada de Babaganush",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Empanada",
        quantity: 0,
        price: 20

      }, {
        id: 9,
        name: "Sprite",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Bebida",
        quantity: 0,
        price: 20

      }, {
        id: 10,
        name: "Fanta",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Bebida",
        quantity: 0,
        price: 20

      }, {
        id: 11,
        name: "Coca-cola",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Bebida",
        quantity: 0,
        price: 20

      }, {
        id: 12,
        name: "Paso de los Toros",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Bebida",
        quantity: 0,
        price: 20

      }, {
        id: 13,
        name: "Papas fritas",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Complementos",
        quantity: 0,
        price: 20

      }, {
        id: 14,
        name: "Nachos",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Bebida",
        quantity: 0,
        price: 20

      }, {
        id: 15,
        name: "NeoVim con Lunar Vim",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "IDE",
        quantity: 0,
        price: 20

      },
    ],

  },
  reducers: {
    addToCarrito: (state, action) => {
      const newProducts = [...state.Productos]
      newProducts[action.payload.id] = action.payload
      state.Productos = newProducts;
    },
  },
});

export const { addToCarrito } = carritoSlice.actions;

export const carritoReducer = carritoSlice.reducer;

export const AgregarAlCarrito = (element) => (dispatch) => {
  dispatch(addToCarrito(element));
};
