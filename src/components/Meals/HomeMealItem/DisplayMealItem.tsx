import { MealItemType } from "../../../types/Meals/MealsTypes";
import { useSelector } from "react-redux";
import { RootState } from "../../../mainStore";
import MealItemForm from "./MealItemForm";
import classes from './DisplayMealItem.module.css';

const DisplayMealItem = ({mealId,mealName,mealDescription,mealPrice,restaurantName,rating}:MealItemType) => {
    let cartQuantity:number = 0;
    const cartItems = useSelector((state:RootState) => state.cart.items)
    const isMealInCart = cartItems.find((item) => item.mealId === mealId)
    if (isMealInCart){cartQuantity = isMealInCart.totalQuantity}
    return (
        <li key={mealId} className={classes.meal_item}>
            <div>
                <h3>{mealName}</h3>
                <h6>{restaurantName}</h6>
                <p>Rating: {rating}</p>
                <div className={classes.meal_description}>{mealDescription}</div>
                <div className={classes.meal_price}>{mealPrice}</div>
            </div>
            <div className={classes.form_cart}>
                <MealItemForm 
                    mealId={mealId} mealName={mealName} mealDescription={mealDescription} 
                    mealPrice={mealPrice} restaurantName={restaurantName} rating={rating}
                />
                <h6>Quantity in Cart: {cartQuantity}</h6>
            </div>
        </li>
    )
}

export default DisplayMealItem;