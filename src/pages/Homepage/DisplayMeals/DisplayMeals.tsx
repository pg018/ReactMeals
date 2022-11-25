import { useEffect } from "react";
import DisplayMealItem from "../../../components/Meals/HomeMealItem/DisplayMealItem";
import { reduxServices } from "../../../reducers/reduxServices";
import OCard from "../../../components/reusableComponents/OCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../mainStore";
import classes from './DisplayMeals.module.css';
import { APIPATH } from "../../../middleware/apiList";


const DisplayMeals = () => {
    const meals = useSelector((state:RootState) => state.meal)
    const dispatch = useDispatch<AppDispatch>()
    const mealDisplayList = (meals.mealList).slice(0,4);

    useEffect(() => {dispatch(reduxServices.meal.getMeals())},[])

    let content:JSX.Element = <h4>Loading...</h4>
    if (!meals.loading && meals.error){
        content = <h4>Error: {meals.error}</h4>
    }
    
    if (!meals.loading && mealDisplayList.length>0){
        content = (
            <ul>
                {mealDisplayList.map((item) => (
                <DisplayMealItem 
                    key={item.mealId} mealId={item.mealId} mealName={item.mealName} 
                    mealDescription={item.mealDescription} mealPrice={item.mealPrice} 
                    restaurantName={item.restaurantName} rating={item.rating}
                />
                ))}
            </ul>
        )
    }

    return (
        <OCard className={classes.meals} title="Meals" 
            CCardTitleClassName={classes.meals_header}
            FooterToLinkPath={APIPATH.meals}
        >
            {content}
        </OCard>
    )
}

export default DisplayMeals;