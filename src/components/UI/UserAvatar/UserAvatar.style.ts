import styled from "styled-components"

export const UserInitials = styled.span`
    width: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
    height: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
    object-fit: cover;
    border: 5px solid ${(props) => props.color.elemsBgc};
    border-radius: 50%;

    position: absolute;
    top: -56px;
    left: 30px;
    text-align: center;
    font-size: 48px;
    color: #fff;
    line-height: calc(3.2vw + 113px);
    `
    export const FileInput = styled.input`
    width: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
    height: calc(3.2vw + 113px); //? 125 - 375 | 175 - 1920
    object-fit: cover;
    border: 5px solid ${(props) => props.color.elemsBgc};
    border-radius: 50%;
    opacity: 0;

    position: absolute;
    top: -56px;
    left: 30px;
    cursor: pointer;
    `