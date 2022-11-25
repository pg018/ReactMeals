import { AxiosError } from "axios";
import { accountCreateSuccess } from "../../../types/commonTypes";
import { RegistrationCredentialsType } from "../../../types/Login/authenticationTypes"
import { AllowedHttpMethods, APILIST } from "../../apiList"
import { v4 as uuid } from 'uuid';

export const generateUniqueID = () => {
    const unique_id = uuid();
    console.log(unique_id)
}

const createAccountApi = async (userData:RegistrationCredentialsType) => {
    try{
        const response = await fetch(APILIST.createAccountAPI,{
            method:AllowedHttpMethods.post,
            body:JSON.stringify({
                email:userData.email,password:userData.password
            }),
            headers:{'Content-type':'application/json'}
        })
        const returnData = await response.json();
        if (returnData.error){return returnData.error.message;}

        await fetch('https://food-order-c7bb3-default-rtdb.firebaseio.com/users.json',{
            method:AllowedHttpMethods.post,
            body:JSON.stringify({
                name:userData.name,email:userData.email,phoneNumber:userData.phoneNumber,
                cartItems:{},orderHistory:{}
            })
        });

        return accountCreateSuccess
    }
    catch(error){
        const err = error as AxiosError;
        return err.message;
    }
}

export default createAccountApi; 