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
        price: 500,
        description: "Con excelentes toques de comino esta opcion es la ideal para los amantes de los sabores ferrosos y la proteina"
      }, {
        id: 1,
        name: "Empanada de verdura",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Empanada",
        quantity: 0,
        price: 500,
        description: "Para el mundo fit y la reduccion de calorias, esta es una opcion excelente, incluye mas de 20 variedades de verduras al vapor y la plancha"
      }, {
        id: 2,
        name: "Empanada de Jamon de arroz y queso",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Empanada",
        quantity: 0,
        price: 500,
        description: "Para los gustos mas variados ofrecemos una imitacion a la experiencia de la circulinea empanada de jamon y queso con un preparado de arroz y musalmendra"

      }, {
        id: 8,
        name: "Empanada de Capresse",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Empanada",
        quantity: 0,
        price: 500,
        description: "Los amantes de lo italico amaran este precioso y degustable sabor napolitano llevado por la mejor albahaca y los mas esquisitos tomates cherrys acompañados de un queso de papa casero"

      }, {
        id: 3,
        name: "Empanada de Zapallo",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Empanada",
        quantity: 0,
        price: 500,
        description: "El dulzor de el Zapallo al vapor con toques de canela y queso de almendra te llevaran a un camino de deleite pleno y refinado"

      }, {
        id: 4,
        name: "Empanada de Cebolla y queso",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Empanada",
        quantity: 0,
        price: 600,
        description: "Cebolla caramelizada por mas de tres horas de coccion en cazuela sellada e integrada con queso de almendras, un sabor que no deja indiferente a nadie"

      }, {
        id: 5,
        name: "Empanada de Carne de soja picante",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Empanada",
        quantity: 0,
        price: 500,
        description: "Para quienes desafien su boca mas alla de sus posibilidades nuestra variedad de 15 especias picantes y salsa de Locoto va a hacer que se piensen dos veces antes de morder la proxima"

      }, {
        id: 6,
        name: "Empanada de Hummus",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Empanada",
        quantity: 0,
        price: 700,
        description: "Con el suave gusto mediterraneo de el pimenton ahumado y la suavidad de garbanzos cocinados en olla de barro esta experiencia demuestra la calidad que solo nosotros podemos brindar"

      }, {
        id: 7,
        name: "Empanada de Babaganush",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Empanada",
        quantity: 0,
        price: 800,
        description: "En nuestra oferta de productos mediterraneos se encuentra este peculiar sabor de las berenjenas horneadas con cebolla y pimientos que va a hacer que cambies tu punto de vista para siempre"

      }, {
        id: 9,
        name: "Sprite",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Bebida",
        quantity: 0,
        price: 600,
        description: "En su presentacion de 500ml esta bebida es la ideal para refrescarte"
      }, {
        id: 10,
        name: "Fanta",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Bebida",
        quantity: 0,
        price: 600,
        description: "Esta refrescante bebida de naranja es tan divertida como deliciosa"

      }, {
        id: 11,
        name: "Coca-cola",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Bebida",
        quantity: 0,
        price: 600,
        description: "Un clasico que no puede dejar de acompañar a nuestros productos"

      }, {
        id: 12,
        name: "Paso de los Toros",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Bebida",
        quantity: 0,
        price: 500,
        description: "Para los amantes de lo amargo y los sabores potentes"

      }, {
        id: 13,
        name: "Papas fritas",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Complementos",
        quantity: 0,
        price: 550,
        description: "Papas rusticas con ajo en polvo y provensal ideales para acompañar con dips de zanahoria o hummus (uno a eleccion)"

      }, {
        id: 14,
        name: "Nachos",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "Complementos",
        quantity: 0,
        price: 600,
        description: "Nachos mexicanos hechos caseramente con la mejor harina de maiz (guacamole y chamoy incluidos)"

      }, {
        id: 15,
        name: "NeoVim con Lunar Vim",
        pic: "https://ourplantbasedworld.com/wp-content/uploads/2021/02/IMG_8391-featured-500x500.jpg",
        category: "IDE",
        quantity: 0,
        price: 0,
        description: "Podes conocer mas de este entorno de desarrollo en su pagina oficial!"

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
