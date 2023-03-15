import { configureStore } from '@reduxjs/toolkit'
import { systemSlice } from './system'

export const store = configureStore({
  reducer: {
    system:systemSlice.reducer
  },
})