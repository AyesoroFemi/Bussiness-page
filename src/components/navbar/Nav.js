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
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="services">Services</NavLink>
                        <NavLink to="products">Products</NavLink>
                        <NavLink to="about">About</NavLink>
                        <NavLink to="blog">Blog</NavLink>
                        <NavLink to="career">Careers</NavLink>
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