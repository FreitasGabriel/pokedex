import styled from "styled-components";

export const Nav = styled.nav`

    width: 100%;
    height: 80px;
    background-color: transparent;
    /* background: linear-gradient(180deg, #F5DB13, #F2B807); */

    box-shadow: 0 1px 10px black;

    .menu-wrapper{
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        padding: 0 15%;
    }



`

export const MenuList = styled.ul`
    
    width: 20vw;
    
    display: flex;
    justify-content: space-between;


`

export const MenuItem = styled.li`
    list-style: none;

    a {
        text-decoration: none;
    }
`
