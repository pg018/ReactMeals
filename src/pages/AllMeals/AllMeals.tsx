import Header from "../../components/AppHeader/Header";
import FilterMeal from "../../components/Meals/FilterMeals/FilterMeal";
import MealBox from "./MealBoxes/MealBox";
import Cart from "../../components/Cart/Cart";
import { useSelector } from "react-redux";
import { RootState } from "../../mainStore";
import { reduxServices } from "../../reducers/reduxServices";
import classes from './AllMeals.module.css';
import ToastContext from "../../contexts/Meals/toast-context";
import { useState, useEffect } from "react";
import OToast from "../../components/reusableComponents/OToast";


const AllMeals = () => {
    const toastDel:number = 7000;
    const displayCart = useSelector((state:RootState) => state.cart.isVisible)
    const displayCartHandler = () => {reduxServices.cart.actions.displayCart()}
    const [toastMess,updateToastMessage] = useState<string>('')
    const [toastCol,updateToastColor] = useState<string>('primary');
    const [displayToast,updateDisplayToast] = useState<boolean>(false);

    useEffect(()=>{
        setTimeout(()=>{
            updateDisplayToast(false)
        },toastDel)
        return (clearTimeout())
    },[displayToast])

    return (
        <ToastContext.Provider value={{
            showToast:displayToast,updateShowToast:updateDisplayToast,
            updateToastColorFunction:updateToastColor, updateToastMessageFunction:updateToastMessage
        }}>
            {displayCart && <Cart visible={displayCart} isVisible={displayCartHandler}/>}
            <Header />
            <FilterMeal className={classes['allmeals-filter']}/>
            {displayToast && <OToast toastMessage={toastMess} toastColor={toastCol} isAutoHide={true} toastDelay={toastDel} />}
            <MealBox />
        </ToastContext.Provider>
    )
}

export default AllMeals;