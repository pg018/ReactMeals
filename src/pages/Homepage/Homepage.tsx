import Header from "../../components/AppHeader/Header"
import OCard from "../../components/reusableComponents/OCard"
import Cart from "../../components/Cart/Cart"
import FilterMeal from "../../components/Meals/FilterMeals/FilterMeal"
import { useDispatch, useSelector } from "react-redux"
import { reduxServices } from "../../reducers/reduxServices"
import { RootState } from "../../mainStore"
import OToast from "../../components/reusableComponents/OToast"
import mealsImage from '../../assets/images/meals.jpg';
import { useState,useEffect } from "react"
import ToastContext from "../../contexts/Meals/toast-context"
import classes from './Homepage.module.css';
import DisplayMeals from "./DisplayMeals/DisplayMeals"
import { APIPATH } from "../../middleware/apiList"


const Homepage = () => {
    const toastDelayMilliSec = 7000;
    const [toastMess,updateToastMessage] = useState<string>('') 
    const [displayToast,updateDisplayToast] = useState<boolean>(false)
    const [toastCol,updateToastColor] = useState<string>('primary')
    const dispatch = useDispatch()
    const displayCart = useSelector((state:RootState) => state.cart.isVisible)
    const displayCartHandler = () => {
        dispatch(reduxServices.cart.actions.displayCart())
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            updateDisplayToast(false)
        },toastDelayMilliSec)
        return (clearTimeout(timer))
    },[displayToast])

    return(
        <ToastContext.Provider value={{
            showToast:displayToast,updateShowToast:updateDisplayToast,
            updateToastMessageFunction:updateToastMessage,
            updateToastColorFunction:updateToastColor
        }}>
            {displayCart && <Cart visible={displayCart} isVisible={displayCartHandler}/>}

            <Header />

            <div className={classes['main-meal-image']}>
                <img src={mealsImage} />
            </div>
            
            <OCard 
                className={classes.summary} title="Delicious Food, Delivered To You" 
                CHeaderClassName={classes['summary-header']}
                CFooterClassName={classes['summary-footer']}
                FooterToLinkPath={APIPATH.meals}
            >
                <p>
                    Choose your favorite meal from our broad selection of available meals
                    and enjoy a delicious lunch or dinner at home.
                </p>
                <p>
                    All our meals are cooked with high-quality ingredients, just-in-time and
                    of course by experienced chefs!
                </p>
            </OCard>

            {displayToast && <OToast isAutoHide={true} toastColor={toastCol} toastMessage={toastMess} toastDelay={toastDelayMilliSec} />}

            {/* <FilterMeal /> */}

            <DisplayMeals />
        </ToastContext.Provider>
    )
}

export default Homepage;