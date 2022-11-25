import { CButton } from "@coreui/react-pro";
import { useDispatch,useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../mainStore";
import { reduxServices } from "../../reducers/reduxServices";
import CartIcon from "./CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = () => {
    const cartQuantity = useSelector((state:RootState) => state.cart.totalQuantity)
    const dispatch = useDispatch<AppDispatch>();
    const cartClickHandler = () => {
        dispatch(reduxServices.cart.actions.displayCart())
    }

    return (
        <CButton className={classes.button} onClick={cartClickHandler}>
            <span className={classes.icon}><CartIcon/></span>
            <span className="d-none d-md-inline">Your Cart</span>
            <span className={`${classes.badge} d-none d-md-inline`}>{cartQuantity}</span>
        </CButton>
    )
}

export default HeaderCartButton;