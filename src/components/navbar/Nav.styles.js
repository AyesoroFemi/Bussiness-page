import styled from "styled-components"

export const Container = styled.div`
    margin: 0 4.5rem;
`
export const NavWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`
export const NavItem = styled.div`
    border: 3px solid red;
    margin: 0 2rem;

    a {
       margin-right: 3rem;
       color: #4F4F4F;
       text-decoration: none;
       font-weight: 700;
       font-size: 18px;
   }

`

export const Button = styled.div`
   margin: 1.7rem 0;
   padding: 1rem 1.5rem;
   background: #0077B5;
   color: #fff;
   border-radius: 10px;
   font-weight: 700;
   box-shadow: 4px 24px 45px -12px rgba(0, 119, 181, 0.15);
`


export const Menu = styled.div`
    display: flex;
    align-items: center
`