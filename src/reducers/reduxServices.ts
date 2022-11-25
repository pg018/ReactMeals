import { cartServices } from "./Cart/cartSliceReducer";
import { authServices } from "./Login/authSlice";
import { mealServices } from "./Meals/mealSliceReducer";

export const reduxServices = {
    cart:cartServices,
    meal:mealServices,
    auth:authServices
}