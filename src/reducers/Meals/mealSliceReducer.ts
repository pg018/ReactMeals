import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { APILIST } from "../../middleware/apiList";
import { MealItemType } from "../../types/Meals/MealsTypes";

type mealSliceState = {mealList:MealItemType[],error:string|undefined,loading:boolean}

const initialState:mealSliceState = {mealList:[],error:'',loading:false}

export const fetchMeals = createAsyncThunk('mealList/fetchMeals', async ()=>{
    const response = await fetch(APILIST.getMeals)
    const responseData = await response.json()
    const transformedData:MealItemType[] = responseData.mealItems.map((item:any) => {
        const data:MealItemType = {
            mealId:item.id,mealName:item.name,mealPrice:item.price,
            mealDescription:item.description,restaurantName:item.restaurantName,rating:item.rating
        }
        return data;
    })
    return transformedData
})

const mealSlice = createSlice({
    name:"mealList",
    initialState:initialState,
    reducers: {
        ascendingPriceCart (state) {
            state.mealList = state.mealList.sort((a,b) => {
                if (a.mealPrice > b.mealPrice){return 1}
                else{return -1}
            })
        },
        descendingPriceCart (state) {
            state.mealList = state.mealList.sort((a,b) => {
                if (a.mealPrice < b.mealPrice){return 1}
                else{return -1}
            })
        },
        descendingRatingCart (state) {
            state.mealList = state.mealList.sort((a,b) => {
                if (a.rating < b.rating){return 1}
                else{return -1}
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMeals.pending,(state) => {
            state.loading = true
        })
        builder.addCase(fetchMeals.fulfilled, (state,action) => {
            state.loading = false;
            state.mealList = action.payload;
            state.error = '';
        })
        builder.addCase(fetchMeals.rejected, (state,action) =>{
            state.loading = false;
            state.mealList = [];
            state.error = action.error.message
        })
    }
})

const mealsThunk = {
    getMeals:fetchMeals
}

export const mealServices = {
    ...mealsThunk,
    actions:mealSlice.actions
}

const mealSliceReducer = mealSlice.reducer;
export default mealSliceReducer;