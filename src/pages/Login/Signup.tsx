import {CButton,CCard,CCardBody,CCol,CContainer,CForm,CFormInput,CInputGroup,CRow,CInputGroupText, CCardGroup, CDropdownItem} from '@coreui/react-pro';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Heading from '../../components/AppHeader/Heading';
import createAccountApi,{generateUniqueID} from '../../middleware/api/signUp/signUpAuthApi';
import { APIPATH } from '../../middleware/apiList';
import {  RegistrationCredentialsType } from '../../types/Login/authenticationTypes';
import { storeNewUser } from '../../firebase/firebase';
import { accountCreateSuccess } from '../../types/commonTypes';

const Signup = () => {
    const [name,setName] = useState<string>('');
    const [email,setEmail] = useState<string>('');
    const [password,setPassword] = useState<string>('');
    const [phoneNumber,setPhoneNumber] = useState<string>('')
    const [isLoginBtnEnabled,setLoginBtnEnabled] = useState<boolean>(false);

    useEffect(()=>{
        if (email && password && phoneNumber && name && phoneNumber.length===10){setLoginBtnEnabled(true);}
        else{setLoginBtnEnabled(false)}
    },[email,password,phoneNumber])


    const createAccountHandler = async () => {
        if (!email || !password || !phoneNumber || !name || phoneNumber.length!==10){
            throw new Error("Please enter the credentials!");
        }
        const credentials:RegistrationCredentialsType = {
            name:name,email:email,password:password,returnSecureToken:true,phoneNumber:phoneNumber
        }
        const authResult = await createAccountApi(credentials)
        alert(authResult)
        generateUniqueID();
        if (authResult === accountCreateSuccess){storeNewUser(credentials)}
        setName('');
        setEmail('');
        setPassword('');
        setPhoneNumber(''); 
    }


    const buttons:JSX.Element = (
        <>
            <CDropdownItem href='#' className='text-white text-center pt-2'><Link to={APIPATH.signIn}>Login</Link></CDropdownItem>
        </>
    )

    return (
        <div className={`min-vh-100 align-items-center login-container`}>
            <CContainer fluid>
                <CRow className='justify-content-center my-5'>
                    <CCol sm={8} md={4}>
                        <Heading classes='text-center mg-bot-20 text-black' />
                        <CCardGroup>
                            <CCard className='login-card login-back'>
                                <CCardBody className='login-card-body'>
                                    <CForm>
                                        <h2 className="text-center mg-bot-20 text-white login-heading pb-2">Create New Account</h2>
                                        <CInputGroup className='mb-3'>
                                            <CInputGroupText className='login-input-icon-container'>
                                                <i className='fa fa-user' />
                                            </CInputGroupText>
                                            <CFormInput autoFocus className='login-input-field' placeholder='Name'
                                                autoComplete='Name' size='sm' value={name} 
                                                onChange={(e)=>{setName(e.target.value)}}
                                            />
                                        </CInputGroup>
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
                                        <CInputGroup className='mb-3'>
                                            <CInputGroupText className='login-input-icon-container'>
                                                <i className='fa fa-asterisk'></i>
                                            </CInputGroupText>
                                            <CFormInput className='login-input-field' placeholder='Indian Phone Number (+91)'
                                                autoComplete='phone' size='sm' value={phoneNumber} minLength={10}
                                                onChange={(e)=>{setPhoneNumber(e.target.value)}}
                                                autoFocus 
                                            />
                                        </CInputGroup>
                                        <CRow>
                                            <CCol xs={12} className='d-grid'>
                                                <CButton onClick={createAccountHandler}
                                                    color='success' size='sm' disabled={!isLoginBtnEnabled}
                                                    className={`px-4 login-btn`}
                                                >Sign Up</CButton>
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

export default Signup;