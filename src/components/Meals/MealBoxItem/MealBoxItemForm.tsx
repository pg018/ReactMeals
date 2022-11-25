import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import ToastContext from "../../../contexts/Meals/toast-context";
import { AppDispatch } from "../../../mainStore";
import { reduxServices } from "../../../reducers/reduxServices";
import { MealCartType, MealItemType } from "../../../types/Meals/MealsTypes";

const MealBoxItemForm = ({mealId,mealName,mealPrice,restaurantName,rating}:MealItemType) => {
    const toastContext = useContext(ToastContext)
    const dispatch = useDispatch<AppDispatch>();

    const addToCartHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const item = new MealCartType(mealId,mealName,mealPrice,1,restaurantName,rating);
        dispatch(reduxServices.cart.actions.addItems(item));
        toastContext.updateToastMessageFunction!("Item Added Successfully");
        toastContext.updateToastColorFunction!("success");
        toastContext.updateShowToast!(true)
    }

    return (
        <>
            <button onClick={addToCartHandler} type="button">Add To Cart</button>
        </>
    )
}

export default MealBoxItemForm;