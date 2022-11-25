import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MealCartType } from "../../types/Meals/MealsTypes";
import { cartState } from "../../types/reducers/cartSliceTypes";

const initialState:cartState = {items:[],totalPrice:0,totalQuantity:0,isVisible:false}

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        displayCart(state) {state.isVisible = !state.isVisible},
        addItems (state,action:PayloadAction<MealCartType>) {
            const item = action.payload;
            const existingItem = state.items.find((cartItem) => cartItem.mealId === item.mealId)
            state.totalQuantity += item.totalQuantity;
            state.totalPrice += item.totalPrice
            if (!existingItem){
                state.items.push(item)
            }
            else{
                existingItem.totalQuantity += item.totalQuantity
                existingItem.totalPrice += item.totalPrice
            }
        },
        removeItems (state,action:PayloadAction<MealCartType>) {
            const item = action.payload;
            const existingItem = state.items.find((cartItem) => cartItem.mealId === item.mealId);
            state.totalPrice -= item.totalPrice;
            state.totalQuantity -= item.totalQuantity;
            if (existingItem!.totalQuantity === 1){
                state.items = state.items.filter((cartItem) => cartItem.mealId != item.mealId)
            }
            else{
                existingItem!.totalQuantity--;
                existingItem!.totalPrice -= item.mealPrice;
            }
        },
        clearCart (state) {
            state.items = initialState.items;
            state.totalPrice = initialState.totalPrice;
            state.totalQuantity = initialState.totalQuantity;
        },
        
    }
})

export const cartServices = {
    actions:cartSlice.actions
}

const cartSliceReducer = cartSlice.reducer;
export default cartSliceReducer;