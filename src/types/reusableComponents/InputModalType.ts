import React from "react";

export type InputModalType = {
    id:string,
    type:'text'|'number'|'email'|'password'|'date'|'file'|'radio'|'url'|'datetime-local'|'button'
    onClick?:()=>void;
    min?:string,
    step?:string,
    max?:string,
    value?:string,
    onChange?:(event:React.ChangeEvent<HTMLInputElement>) => void
}