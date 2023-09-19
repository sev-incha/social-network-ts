
import React from "react";
import { ThemeInput, ThemeInputErro } from "./AppInput.style";

type AppInputProps = {
    type: 'tel' | 'password' | 'text'
    inputPlaceholder: string
    isError?: boolean,
    errorText?: string ;
    
}
 
export const AppInput = ({ inputPlaceholder, type, errorText, isError, ...props}: AppInputProps ) => {
    return (
        <>
        <ThemeInput 
        type={type} 
        placeholder={inputPlaceholder} 
        isError={isError}
        {...props}
        />
        {isError &&
        
        <ThemeInputErro isError={isError}>
            {errorText}
        </ThemeInputErro>
        }
        </>
    )
}