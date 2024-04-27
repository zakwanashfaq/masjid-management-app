// ref: https://redux.js.org/tutorials/quick-start

import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    selected_nav: 'home',
  },
  reducers: {
    changeNav: (state, action: {payload: string}) => {
      state.selected_nav = action.payload
    },
    incrementByAmount: (state, action) => {
    //   state.value += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { changeNav } = counterSlice.actions

export default counterSlice.reducer