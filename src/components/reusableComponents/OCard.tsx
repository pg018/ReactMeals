import {CCard,CCardBody,CCardFooter,CCardHeader,CLink} from '@coreui/react-pro';
import { Link } from 'react-router-dom';
import React from 'react';

const OCard = (props:{
    className?:string,
    CHeaderClassName?:string,
    CBodyClassName?:string,
    CFooterClassName?:string,
    CCardTitleClassName?:string,
    CLinkClassName?:string,
    title?:string,
    CLinkText?:string
    children?:React.ReactNode,
    CFooterHREF?:string,
    FooterChildren?:React.ReactNode,
    FooterToLinkPath:string
}):JSX.Element => {
    return (
        <CCard className={`card ${props.className}`}>
            <CCardHeader className={`header center ${props.CHeaderClassName}`}>
                <h2 className={`h2 ${props.CCardTitleClassName?props.CCardTitleClassName:""}`}>{props.title}</h2>
            </CCardHeader>
            <CCardBody className={`${props.CBodyClassName}`}>{props.children}</CCardBody>
            <CCardFooter className={`footer center ${props.CFooterClassName}`}>
                <Link className={props.CLinkClassName?props.CLinkClassName:""} to={props.FooterToLinkPath}
                >{props.CLinkText?props.CLinkText:"View More"}</Link>
                {props.FooterChildren}
            </CCardFooter>
        </CCard>
    )
}

export default OCard;