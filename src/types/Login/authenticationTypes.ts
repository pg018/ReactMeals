import { ApiLoadingState } from "../../middleware/apiList"
import { ValidationError } from "../commonTypes"

export interface LoginCredentialsType {
    email:string,
    password:string,
    returnSecureToken?:true
}

export interface RegistrationCredentialsType extends LoginCredentialsType {
    phoneNumber:string,
    name:string,
}

export interface AuthenticateUserType{
    idToken:string | null,
    email:string,
    isLoggedIn:string
}

export type AuthenticationStateType = {
    authUser:AuthenticateUserType,
    isLoading: ApiLoadingState,
    error: ValidationError,
}

export interface UserDataType extends AuthenticateUserType {
    email:string,
    idToken:string,
}

export interface User{
    email:string,
    name:string,
    phoneNumber:string
}