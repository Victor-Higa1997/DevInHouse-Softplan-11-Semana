import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    border: solid 0.1rem;
    width: 60rem;
    height: 5rem;
    padding: 1rem;
    margin-top: 2rem;
    border-radius: 0.3rem;
    background-color: #E8E8E8;
`
export const Button = styled.button`
    border: none;
    background-color: gray;
    border-radius: 0.2rem;
    color: black;
    margin: 0.2rem;
    height: 2rem;
    width: 5rem;
    &:hover{
        background-color: #CDC1C5;
        color: white;
    }
`
export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`
export const Ini = styled.section`
    display: flex;

`