import { MealCartType } from "../Meals/MealsTypes";

export type cartState = {
    items:MealCartType[],
    isVisible?:boolean,
    totalQuantity:number,
    totalPrice:number
}