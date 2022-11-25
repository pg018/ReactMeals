import { CModal,CModalBody,CModalHeader,CModalFooter,CButton,CCloseButton, CModalTitle} from "@coreui/react-pro";
import { ModalPropsType } from "../../types/reusableComponents/ModalPropsType";

const OModal = ({
    visible,
    isVisible,
    modalClassName = "",
    alignment = 'center',
    modalTitle,
    modalFooterText,
    children,
    modalHeaderClass,
    modalFooterClass,
    modalSize,
    confirmButtonText = 'Confirm',
    cancelButtonText = 'Cancel',
    cancelButtonHandler = ()=>isVisible(false)
}:ModalPropsType):JSX.Element => {
    return(
        <CModal className={modalClassName} visible={visible} onClose={()=>{isVisible(false)}} size={modalSize} alignment={alignment}>
            <CModalHeader className={`header center ${modalHeaderClass?modalHeaderClass:""}`}>
                <CModalTitle>{modalTitle && <h2>{modalTitle}</h2>}</CModalTitle>
            </CModalHeader>
            <CModalBody>{children}</CModalBody>
            <CModalFooter className={`footer ${modalFooterClass?modalFooterClass:""}`}>
                {modalFooterText}
                <CButton color="secondary" onClick={cancelButtonHandler}>{cancelButtonText}</CButton>
                <CButton color="primary">{confirmButtonText}</CButton>
            </CModalFooter>
        </CModal>
    )
}

export default OModal;