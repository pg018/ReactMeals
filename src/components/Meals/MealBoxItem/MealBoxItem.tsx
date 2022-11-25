import { useSelector } from "react-redux";
import { RootState } from "../../../mainStore";
import { MealItemType } from "../../../types/Meals/MealsTypes";
import classes from './MealBoxItem.module.css';
import MealBoxItemForm from "./MealBoxItemForm";

const MealBoxItem = ({mealId,mealName,mealDescription,mealPrice,restaurantName,rating}:MealItemType) => {
    let cartQuantity:number = 0;
    const cartItems = useSelector((state:RootState) => state.cart.items)
    const isMealInCart = cartItems.find((item)=>item.mealId === mealId);
    if (isMealInCart){cartQuantity = isMealInCart.totalQuantity;}

    return (
        <div key={mealId} className={classes['meal-box-item']}>
            <div>
                <h5>{restaurantName}</h5>
                <div><h6>Rating: {rating}</h6></div>
                <div>{mealDescription}</div>
                <h6>{mealPrice}</h6>
                <MealBoxItemForm mealId={mealId} mealName={mealName} mealDescription={mealDescription}
                    mealPrice={mealPrice} restaurantName={restaurantName} rating={rating} />
                <h6><br/>Quantity in Cart: {cartQuantity}</h6>
            </div>
        </div>
    )
}

export default MealBoxItem;