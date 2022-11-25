import {configureStore} from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cartSliceReducer from './reducers/Cart/cartSliceReducer'
import authSliceReducer from './reducers/Login/authSlice';
import mealSliceReducer from './reducers/Meals/mealSliceReducer';

const store = configureStore({
    reducer:{
        cart:cartSliceReducer,
        meal:mealSliceReducer,
        auth:authSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;