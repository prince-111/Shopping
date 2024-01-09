import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './slices/cartSlice'

export const Store = configureStore({
    reducer: {
        Cart : CartSlice
    },
})