import React from "react";

interface AppButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  isDisabled: boolean;
};

export const AppButton = ({ buttonText, isDisabled, type, ...props }: AppButtonProps) => {
  return <button type={type} disabled={isDisabled} {...props}>{buttonText}</button>;
};
