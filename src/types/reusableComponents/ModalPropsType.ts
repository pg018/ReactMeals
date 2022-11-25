export type ModalPropsType = {
    visible:boolean
    isVisible:(value:boolean)=>void
    modalClassName?:string
    alignment?: 'center' | 'top'
    modalTitle?:string
    modalFooterText?:JSX.Element | string
    modalSize?: 'sm' | 'lg' | 'xl' | undefined
    children: JSX.Element | string
    modalHeaderClass?:string
    modalFooterClass?:string
    modalBodyClass?:string
    closeButtonText?:string
    cancelButtonText?:string
    confirmButtonText?:string
    cancelButtonHandler?:()=>void
}