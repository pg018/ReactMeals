import { useDispatch } from "react-redux";
import { reduxServices } from "../../../reducers/reduxServices";
import { MealCartType } from "../../../types/Meals/MealsTypes";
import classes from './CartItem.module.css';


const CartItem = (props:{cartItem:MealCartType}) => {
    const dispatch = useDispatch();
    const item = props.cartItem;
    const toCartItem = new MealCartType(item.mealId,item.mealName,item.mealPrice,1,item.restaurantName,item.rating)

    const addToCartHandler = () => {
        dispatch(reduxServices.cart.actions.addItems(toCartItem))
    }

    const removeFromCartHandler = () => {
        dispatch(reduxServices.cart.actions.removeItems(toCartItem))
    }

    return(
        <li key={item.mealId} className={classes['cart-meal']}>
            <div>
                <h3>{item.mealName}</h3>
                <h6>{item.restaurantName}</h6>
            </div>
            <span className={classes['cart-price']}>X{item.totalQuantity}</span>
            <span className={classes['cart-price']}>{item.totalPrice}</span>
            <div className={classes['cart-actions']}>
                <button onClick={removeFromCartHandler}>-</button>
                <button onClick={addToCartHandler}>+</button>
            </div>
        </li>
    )
}

export default CartItem