import { CHeader } from "@coreui/react-pro";
import React from "react";
import classes from './Header.module.css';
import accountImage from '../../assets/images/account.png'
import loginImage from '../../assets/images/login.png';
import HeaderCartButton from "./HeaderCartButton";
import { Link, useNavigate } from "react-router-dom";
import ODropdown from "../reusableComponents/ODropdown";
import { APIPATH } from "../../middleware/apiList";
import Heading from "./Heading";
import { useAppDispatch } from "../../mainStore";
import { reduxServices } from "../../reducers/reduxServices";

const Header = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isLoggedIn = (localStorage.getItem("isLoggedIn") === "1");

    const logoutHandler = () => {
        localStorage.clear();
        dispatch(reduxServices.auth.actions.clearAuthentication());
        navigate('/')
    }
    
    const notSignedInDropdown:JSX.Element[] = [
        <Link style={{color:"black"}} to={APIPATH.signIn} key="login">Login</Link>,
        <Link style={{color:"black"}} to={APIPATH.signUp} key="signup">Sign Up</Link>
    ]

    const signedInDropdown:JSX.Element[] = [
        <Link style={{color:"black"}} to="/" key="Account">Account</Link>,
        <Link style={{color:"black"}} to={"/"} key="logout" onClick={logoutHandler}>Log Out</Link>,
    ]

    return (
        <React.Fragment>
            <CHeader className={classes['header-head']}>
                <Heading/>
                <div className={classes['header-icons']}>
                    <HeaderCartButton />
                    {!isLoggedIn && <ODropdown dropSize="sm" dropDownItems={notSignedInDropdown}><img src={loginImage} /></ODropdown>}
                    {isLoggedIn && <ODropdown dropSize="sm" dropDownItems={signedInDropdown}><img src={accountImage} /></ODropdown>}
                </div>
            </CHeader>
        </React.Fragment>
    )
}

export default Header;