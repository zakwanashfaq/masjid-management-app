// ref: https://redux.js.org/tutorials/quick-start

import { configureStore } from '@reduxjs/toolkit'
import adminDashboardSlice from './slices/adminDashboardSlice'

export default configureStore({
  reducer: {
    adminDashState: adminDashboardSlice,
  }
})