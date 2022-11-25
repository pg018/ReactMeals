import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import ToastContext from "../../../contexts/Meals/toast-context";
import { AppDispatch } from "../../../mainStore";
import { reduxServices } from "../../../reducers/reduxServices";
import { MealCartType, MealItemType } from "../../../types/Meals/MealsTypes";
import { InputModalType } from "../../../types/reusableComponents/InputModalType";
import OInput from "../../reusableComponents/OInput";
import classes from './MealItemForm.module.css';

const MealItemForm = ({mealId,mealName,mealPrice,restaurantName,rating}:MealItemType) => {
    const displayToast = useContext(ToastContext)
    const [amount,updateAmount] = useState<string>('1')
    const dispatch = useDispatch<AppDispatch>();

    const amountHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        updateAmount(event.target.value)
    }

    const addToCartHandler = () => {
        const item = new MealCartType(mealId,mealName,mealPrice,+amount,restaurantName,rating)
        dispatch(reduxServices.cart.actions.addItems(item))
        displayToast.updateToastMessageFunction!("Item Added Successfully")
        displayToast.updateToastColorFunction!("success")
        displayToast.updateShowToast!(true)
    }

    const inputs:InputModalType = {id:'amount_'+mealId,type:'number',min:'1',step:'1',value:amount,onChange:amountHandler}
    return (
        <form className={classes.meal_form}>
            <OInput inputLabel="Amount" inputData={inputs}/>
            <button type="button" onClick={addToCartHandler}>+ Add</button>
        </form>
    )
}

export default MealItemForm;