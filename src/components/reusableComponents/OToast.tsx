import { CToast,CToastBody,CToastClose } from "@coreui/react-pro";
import { ToastPropsType } from "../../types/reusableComponents/ToastPropsType";

const OToast = ({toastMessage,toastColor,isAutoHide,toastDelay}:ToastPropsType):JSX.Element => {
    return(
        <CToast autohide={isAutoHide} visible={true} color={toastColor} delay={toastDelay} className="toast">
            <div className="d-flex">
                <CToastBody>{toastMessage}</CToastBody>
                <CToastClose className="me-2 m-auto" />
            </div>
        </CToast>
    )
}

export default OToast;