import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items += 1 [...state.items, action.payload]; 
    },
    removeFromBasket: (state, action) => {
      state.items -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = basketSlice.actions

export default basketSlice.reducer