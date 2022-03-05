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

export const Dropdown = styled.div`
    padding: 8px 16px;
    color: #fff;
    display: flex;
    align-items: ceter;
    justify-content: center;
    position: absolute;
    display: none;
    bottom: 0px;
    left: 0;

    span {
        border: 1px solid rgb(151, 151, 151, 0.34);
        position: absolute;
        top: 16px;
        left: -35px;
        padding: 10px;
        font-size: 14px;
        letter-spacing: 3px;
        width: 100px;
        background: rgb(19, 19, 19);
        border-radius: 4px;
        box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
    }
`

export const SignOutButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    position: relative;
    
    &:hover ${Dropdown} {
        display: inline-block;
    }
`