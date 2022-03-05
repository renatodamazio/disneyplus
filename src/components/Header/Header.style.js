import styled from "styled-components"

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 36px;
    z-index: 3;
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    flex-row: row nowrap;
    flex-grow: 1;
    height: 100%;
    margin-left: 25px;

    @media (max-width: 768px) {
        display: none;
    }
`

export const NavMenuItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        position: relative;

        &:hover span:before {
            width: 100%;
            opacity: 1;
        }
    }

    span {
        color: rgb(249, 249, 249);
        font-size: 12px;
        display: inline-block;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 4px;
        position: relative;
        margin-left: 4px;

        &:before {
            content: "";
            width: 0%;
            height: 2px;
            background: #fff;
            left: 0;
            position: absolute;
            bottom: -4px;
            opacity: 0;
            border-radius: 2px;
            transition: .250s ease-in-out;
        }
    }

`