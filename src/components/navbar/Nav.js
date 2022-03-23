import { NavLink } from "react-router-dom";


import { Container, NavWrapper, NavItem, Button, Menu} from './Nav.styles'

export const Nav = () => {
    return (
        <Container>
            <NavWrapper>
                <div>
                    <img src="./assets/logo.svg" alt="" />
                </div>
                <Menu>
                    <NavItem>
                        <NavLink to="#">Home</NavLink>
                        <NavLink to="#">Services</NavLink>
                        <NavLink to="#">Products</NavLink>
                        <NavLink to="#">About</NavLink>
                        <NavLink to="#">Blog</NavLink>
                        <NavLink to="#">Careers</NavLink>
                        <NavLink to="#">Contact Us</NavLink>
                    </NavItem>
                    <Button>
                        Get a Quote
                    </Button>
                </Menu>
            </NavWrapper>
        </Container>
    )
}