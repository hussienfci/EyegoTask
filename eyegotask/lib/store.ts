"use client"
import { tableDataSlice } from './features/auth_tableData/tableDataSlice';
import { authSlice } from './features/auth_tableData/authSlice';
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    tableData: tableDataSlice.reducer,
    auth: authSlice.reducer 
  },
});
export type RootStateType = ReturnType<typeof store.getState>
export default store ; 
