import styled from 'styled-components';

export const Nav = styled.nav`
    background-color: #545444;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #838B83;
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
    background-color: #CDC1C5;
    border-radius: 0.2rem;
    color: white;
    &:hover{
        background-color: gray;
        color: black;
    }

`