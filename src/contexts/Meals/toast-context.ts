import React,{Dispatch, SetStateAction} from "react";

type toastContext = {
    updateShowToast?:Dispatch<SetStateAction<boolean>>,
    showToast:boolean,
    updateToastMessageFunction?:Dispatch<SetStateAction<string>>,
    updateToastColorFunction?:Dispatch<SetStateAction<string>>
}

const ToastContext = React.createContext<toastContext>({
    showToast:false
})

export default ToastContext;