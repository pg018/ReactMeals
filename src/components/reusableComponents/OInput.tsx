import { InputModalType } from "../../types/reusableComponents/InputModalType";

const OInput = (props:{inputLabel:string,inputData:InputModalType}) => {
    return (
        <div className="oinput">
            <label>{props.inputLabel}</label>
            <input {...props.inputData}></input>
        </div>
    )
}

export default OInput;