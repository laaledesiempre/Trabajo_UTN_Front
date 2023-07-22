import { createSlice, current } from "@reduxjs/toolkit";

export const filtersSlice = createSlice({
  name: "Filters",
  initialState: {
    filters: ["Bebida", "Empanada", "Complementos"],
    input: ""
  },
  reducers: {
    changeInput: (state, action) => {
      state.input = action.payload;
    },
    changeFilter: (state, action) => {
      const currentFilter = current(state.filters)
      if (currentFilter.includes(action.payload)) {
        state.filters = [...currentFilter].filter(e => e !== action.payload)
      } else {
        const newArr = currentFilter.slice()
        newArr.push(action.payload)
        state.filters = newArr
      }
    },
    resetFilters: (state, _action) => {
      state.filters = ["Bebida", "Empanada", "Complementos"]
    }
  },
});

export const { resetFilters, changeInput, changeFilter } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

export const updateInput = (newInput) => (dispatch) => {
  dispatch(changeInput(newInput))
}
export const updateFilter = (filter) => (dispatch) => {
  dispatch(changeFilter(filter))
}
export const reloadFilters = () => (dispatch) => {
  dispatch(resetFilters())
}
