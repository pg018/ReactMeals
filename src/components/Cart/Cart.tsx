import OModal from "../reusableComponents/OModal";
import CartItem from "./CartItem/CartItem";
import { useSelector,useDispatch } from "react-redux";
import classes from './Cart.module.css'
import { AppDispatch, RootState } from "../../mainStore";
import { reduxServices } from "../../reducers/reduxServices";
import { useContext } from "react";
import ToastContext from "../../contexts/Meals/toast-context";

const Cart = (props:{visible:boolean,isVisible:(val:boolean)=>void}) => {
    const displayToast = useContext(ToastContext)
    const dispatch = useDispatch<AppDispatch>()
    const cart = useSelector((state:RootState) => state.cart)
    const cartList = cart.items.map((item) => <CartItem cartItem={item}/>)

    const clearCartHandler = () => {
        let cartLengthBeforeClear = cart.items.length;
        dispatch(reduxServices.cart.actions.clearCart())
        dispatch(reduxServices.cart.actions.displayCart())
        if (cartLengthBeforeClear>0){
            displayToast.updateToastMessageFunction!("Cart Cleared Successfully")
            displayToast.updateToastColorFunction!("success")
        }
        else{
            displayToast.updateToastMessageFunction!("Cart is Already Empty!!")
            displayToast.updateToastColorFunction!("warning")
        }
        displayToast.updateShowToast!(true)
    }

    return (
        <OModal 
            visible={props.visible} isVisible={props.isVisible} modalTitle="Cart" modalSize="lg" 
            alignment="top" confirmButtonText="Place Order" cancelButtonText="Clear Cart" 
            cancelButtonHandler={clearCartHandler}
            >
            <>
                {cartList}
                <div className={classes['cart-tot']}>
                    <span>Total Amount</span>
                    <span>{cart.totalPrice}</span>
                </div>
            </>
        </OModal>
    )
}

export default Cart;