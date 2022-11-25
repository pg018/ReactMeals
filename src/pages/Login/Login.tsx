import {CButton,CCard,CCardBody,CCol,CContainer,CForm,CFormInput,CInputGroup,CRow,CInputGroupText, CCardGroup, CDropdownItem} from '@coreui/react-pro';
import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUserInfo } from '../../firebase/firebase';
import Heading from '../../components/AppHeader/Heading';
import { AppDispatch } from '../../mainStore';
import { APIPATH } from '../../middleware/apiList';
import { reduxServices } from '../../reducers/reduxServices';

const Login = () => {
    const [email,setEmail] = useState<string>('');
    const dispatch = useDispatch<AppDispatch>();
    const [password,setPassword] = useState<string>('');
    const [isLoginBtnEnabled,setLoginBtnEnabled] = useState<boolean>(false);

    const navigate = useNavigate()

    useEffect(()=>{
        if (email && password){
            dispatch(reduxServices.auth.actions.clearError());
            dispatch(reduxServices.auth.actions.clearLoading());
            setLoginBtnEnabled(true);}
        else{setLoginBtnEnabled(false)}
    },[email,password,dispatch])

    useEffect(()=>{
        if (!email && !password){
            dispatch(reduxServices.auth.actions.clearError());
            dispatch(reduxServices.auth.actions.clearLoading());
        }
    },[email,password,dispatch])

    const signInHandler = async (event:React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const data = {email:email,password:password}
        const result = await dispatch(reduxServices.auth.authUser(data))
        if (reduxServices.auth.authUser.fulfilled.match(result)){
            const data = await getUserInfo(email)
            navigate('/')
        }
        else{
            alert(result.error.message)
            setPassword('')
        }
    }

    const buttons:JSX.Element = (
        <>
            <CDropdownItem href='#' className='text-white text-center pt-2'><Link to={APIPATH.signUp}>Sign Up</Link></CDropdownItem>
            <CDropdownItem href='#' className='text-white text-center py-2'>Forgot Password?</CDropdownItem>
        </>
    )

    return (
        <div className={`min-vh-100 align-items-center login-container`}>
            <CContainer fluid>
                <CRow className='justify-content-center my-5'>
                    <CCol sm={8} md={4}>
                        <Heading classes='text-center mg-bot-20 text-black'/>
                        <CCardGroup>
                            <CCard className='login-card login-back'>
                                <CCardBody className='login-card-body'>
                                    <CForm>
                                        <h2 className="text-center mg-bot-20 text-white login-heading pb-2">Login</h2>
                                        <CInputGroup className='mb-3'>
                                            <CInputGroupText className='login-input-icon-container'>
                                                <i className='fa fa-user'></i>
                                            </CInputGroupText>
                                            <CFormInput
                                                className='login-input-field' placeholder='Email'
                                                autoComplete='email' size='sm' value={email}
                                                onChange={(e)=>{setEmail(e.target.value)}}
                                                autoFocus
                                            />
                                        </CInputGroup>
                                        <CInputGroup className='mb-3'>
                                            <CInputGroupText className='login-input-icon-container'>
                                                <i className='fa fa-asterisk'></i>
                                            </CInputGroupText>
                                            <CFormInput
                                                className='login-input-field' placeholder='Password'
                                                autoComplete='password' size='sm' type='password'
                                                autoFocus value={password} onChange={(e)=>{setPassword(e.target.value)}}
                                            />
                                        </CInputGroup>
                                        <CRow>
                                            <CCol xs={12} className='d-grid'>
                                                <CButton
                                                    color='success' size='sm' disabled={!isLoginBtnEnabled}
                                                    className={`px-4 login-btn`} onClick={signInHandler}
                                                >Login</CButton>
                                            </CCol>
                                        </CRow>                                        
                                        <CRow>                                            
                                            {buttons}
                                        </CRow>
                                        <CRow className="text-center pad-ver login-copyrights text-white pt-1">
                                            <p>ReactMeals Pvt. Ltd.</p>
                                        </CRow>
                                    </CForm>
                                </CCardBody>
                            </CCard>
                        </CCardGroup>
                    </CCol>
                </CRow>
            </CContainer>
        </div>
    )
}

export default Login;