import styled from 'styled-components';


export const Nav = styled.nav`
    background-color: ${props => props.dark? props.theme.dark.background:props.theme.light.background };
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.dark? props.theme.dark.color:props.theme.light.color };
    height: 1rem;
    font-family: Verdana;
    font-size: 2rem;
    padding: 2rem;
`

export const Button = styled.button`
    margin-left: 1rem;
    outline: none;
    border: none;
    height: 2rem;
    width: 8rem;
    font-size: 1rem;
    background-color: ${props => !props.dark? props.theme.dark.background:props.theme.light.background };
    border-radius: 0.2rem;
    color: ${props => !props.dark? props.theme.dark.color:props.theme.light.color };
    /* &:hover{
        background-color: brown;
        color: black;
    } */

`