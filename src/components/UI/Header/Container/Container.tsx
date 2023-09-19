import React from "react";
import "./Container.scss";
import { StyledContainer } from "./Continer.style";

type ContainerProps = {
    children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
    return (
        <StyledContainer>
            {children}
        </StyledContainer>
    )
}