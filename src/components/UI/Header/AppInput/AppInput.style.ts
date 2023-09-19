import { styled } from "styled-components";

type StyleInput = {
    isError?: boolean 
}

export const ThemeInput = styled.input<StyleInput>` 
    display: block;
    width: 100%;
    margin-bottom: ${(props) => props.isError ? '4px' : '20px'};
    border: 2px solid ${(props) => props.theme.colors.disabledBgc};
    background-color: transparent;

    &:last-child {
    margin-bottom: 40px;
    }

    &:is(:hover, :focus) {
    border-color: ${(props) => props.isError ?
    props.theme.colors.red: 
    props.theme.colors.primeColor};
    } 
    
    ${(props) => props.isError &&`
    border-color: ${props.theme.colors.red}
    `}  
`

export const ThemeInputErro = styled.span<StyleInput> `
    display: block;
    margin: 0 0 20px;
    text-align: left;
    ${(props) => props.isError && `
     color: ${ props.theme.colors.red}`}
`