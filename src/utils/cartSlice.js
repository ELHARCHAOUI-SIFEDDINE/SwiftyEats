import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      // * Vanilla (Older) Redux - DON'T MUTATE STATE, returning was mandotory
      /*
      const newState = [ ...state ];
      newState.items.push(action.payload)
      return newState
      */

      // * Redux Toolkit - We should have to mutate the state, returning is not mandotory
      // * RTK uses Immer.js behind the scenes
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      // * RTK - either Mutate existing the state or return the new State
      // state.items.length = 0; // state = []

      return { items: [] };
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
