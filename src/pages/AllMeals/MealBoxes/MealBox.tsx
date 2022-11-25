import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { reduxServices } from "../../../reducers/reduxServices";
import MealBoxItem from "../../../components/Meals/MealBoxItem/MealBoxItem";
import OCard from "../../../components/reusableComponents/OCard";
import { AppDispatch, RootState } from "../../../mainStore";
import classes from './MealBox.module.css';


const MealBox = () => {
    const meals = useSelector((state:RootState) => state.meal);
    const dispatch = useDispatch<AppDispatch>()
    const allMealList = meals.mealList

    useEffect(()=>{dispatch(reduxServices.meal.getMeals())},[])

    let content:JSX.Element= (<h4>Loading...</h4>)
    if (meals.error && !meals.loading){content = <h4>Error: {meals.error}</h4>}
    if (!meals.loading && allMealList.length>0){
        content = (
            <ul className={`list-inline ${classes['box-meals-list']}`}>
                {allMealList.map((item)=>{
                    return (
                        <li className={classes['box-meals']} key={item.mealId}>
                            <OCard title={item.mealName} className={classes['card-box']}
                                CLinkText="Show Details" FooterToLinkPath="/"
                            >
                                <MealBoxItem mealId={item.mealId} mealDescription={item.mealDescription}
                                        mealPrice={item.mealPrice} restaurantName={item.restaurantName}
                                        rating={item.rating} mealName={item.mealName}
                                />
                            </OCard>
                        </li>
                    )
                })}
            </ul>
        )
    }
    
    
    //list-inline for removing bullet points and centering it in small screens
    return (
        <>
            {content}
        </>
    )
}

export default MealBox;