import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../mainStore';
import { reduxServices } from '../../../reducers/reduxServices';
import classes from './FilterMeal.module.css';

const FilterMeal = (props:{className?:string}) => {
    const dispatch = useDispatch<AppDispatch>();

    const lowToHighPriceHandler = () => {
        dispatch(reduxServices.meal.actions.ascendingPriceCart())
    }

    const highToLowPriceHandler = () => {
        dispatch(reduxServices.meal.actions.descendingPriceCart())
    }

    const descendingRatingHandler = () => {
        dispatch(reduxServices.meal.actions.descendingRatingCart())
    }

    return (
        <div className={`${classes['filter-meals']} ${props.className?props.className:""}`}>
            <button>Filters</button>
            <button value="low-to-high" id="lo-hi" onClick={lowToHighPriceHandler}>Cost: Low To High</button>
            <button value="high-to-low" id="hi-lo" onClick={highToLowPriceHandler}>Cost: High To Low</button>
            <button onClick={descendingRatingHandler}>Rating</button>
        </div>
    )
}

export default FilterMeal;