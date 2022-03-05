import styled from "styled-components";


export const SignUp = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #0063e5;
    margin-bottom: 12px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 18px;
    padding: 15.5px 0;
    border: 1px solid transparent;
    border-radius: 4px;

    &:hover {
        background-color: #0483ee;
    }
`
export const LoginButton = styled.button`
    cursor: pointer;
    border: 1px solid #f9f9f9;
    background: transparent;
    color: #f9f9f9;
    border-radius: 4px;
    padding: 8px 16px;
    transition: .250s ease-in;
    letter-spacing: 1.5px;

    &:hover {
        color: #090b13;
        background: #f9f9f9;
    }
`