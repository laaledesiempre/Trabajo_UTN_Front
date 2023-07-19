import { createSlice } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "Filters",
  initialState: {
    filter: [bebida, empanada.otros],
    input: ""
  },
  reducers: {
    changeInput: (state, action) => {
      state.input = action.payload;
    },
    changeFilter: (state, action) => {
      if (state.filter.includes(action.payload)) {
        state.filter = state.filter.filter(e => e !== action.payload)
      } else {
        state.filter = state.filter.slice().push(action.payload)
      }
    }
  },
});

export const { changeInput, changeFilter } = carritoSlice.actions;

export const filtersReducer = filtersSlice.reducer;

export const updateInput = (newInput) => (dispatch) => {
  dispatch(changeInput(newInput))
}
export const updateFilter = (filter) => (dispatch) => {
  dispatch(changeFilter(filter))
}
