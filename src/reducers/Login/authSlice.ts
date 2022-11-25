import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import signInApi from "../../middleware/api/Login/loginAuthApi";
import { ApiLoadingState } from "../../middleware/apiList";
import { ValidationError } from "../../types/commonTypes";
import { AuthenticationStateType, LoginCredentialsType } from "../../types/Login/authenticationTypes";

const authenticateUser = createAsyncThunk('auth/authenticateUser',async (userCredentials:LoginCredentialsType,thunkApi)=>{
    try{
        const fetchDet =  await signInApi(userCredentials.email,userCredentials.password)
        if (fetchDet.error){return thunkApi.rejectWithValue(fetchDet.error.message)}
        return thunkApi.fulfillWithValue(fetchDet)
    }
    catch(error){
        const err = error as AxiosError;
        return thunkApi.rejectWithValue(err.response?.status as ValidationError)
    }
})

const initialAuthenticationState = {
    // isLoggedIn:false,
    isLoading:ApiLoadingState.idle,
} as AuthenticationStateType

const authSlice = createSlice({
    name:'auth',
    initialState:initialAuthenticationState,
    reducers:{
        setAuthentication(state,action){return {...state,...action.payload}},
        clearAuthentication(state){return {...state,...initialAuthenticationState};},
        clearError(state){state.error = null;},
        clearLoading(state){state.isLoading = ApiLoadingState.idle;}
    },
    extraReducers:(builder) => {
        builder.addCase(authenticateUser.pending,(state)=>{
            state.isLoading = ApiLoadingState.loading;
        })
        builder.addCase(authenticateUser.fulfilled,(state,action)=>{
            return {...state,...action.payload,isLoading:ApiLoadingState.succeeded}
        })
        builder.addCase(authenticateUser.rejected,(state,action)=>{
            state.isLoading = ApiLoadingState.failed;
            state.error = action.payload as ValidationError
        })
    }
})

const authThunk = {
    authUser:authenticateUser
}

export const authServices = {
    actions:authSlice.actions,
    ...authThunk
}


const authSliceReducer = authSlice.reducer;
export default authSliceReducer