import React, { forwardRef } from "react";
import { ThemeInput, ThemeInputError } from "./AppInput.style";

interface AppInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'tel' | 'password' | 'text'
  inputPlaceholder: string
  isError?: boolean,
  errorText?: string
}

export const AppInput = forwardRef<HTMLInputElement, AppInputProps>(
  function AppInput({ inputPlaceholder, type, isError, errorText, ...props }, ref) 
 {
  return (
    <>
      <ThemeInput 
        type={type} 
        placeholder={inputPlaceholder} 
        $isError={isError} 
        {...props} 
      />
      {isError && 
        <ThemeInputError $isError={isError}>
          {errorText}
        </ThemeInputError>
      }
    </>
  )
})