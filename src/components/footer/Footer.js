import styled from "styled-components"
import { Container } from "../navbar/Nav.styles"

export const Footer = () => {
    return (
        <FooterContainer>
            <ContainerLayout>
                <div>
                    <h4>INTELLITECH © 2022</h4>
                    <SocialLink>
                            <a href="#">
                                <box-icon size="22px" name='facebook' type='logo' color='#ffffff' ></box-icon>
                            </a>
                            <a href="#">
                                <box-icon size="22px" name='instagram' type='logo' color='#ffffff' ></box-icon>
                            </a>
                            <a href="#">
                                <box-icon size="22px" name='twitter' type='logo' color='#ffffff' ></box-icon>
                            </a>
                            <a href="#">
                                <box-icon size="22px" name='linkedin' type='logo' color='#ffffff' ></box-icon>
                            </a>
                            <a href="#">
                                <box-icon size="22px" name='youtube' type='logo' color='#ffffff' ></box-icon>
                            </a>
                    </SocialLink>
                        <p><box-icon size="20px" name='phone' type='solid' color='#ffffff' ></box-icon>
                            <span>
                                +234-809-022-4422
                            </span>
                        </p>
                        <p><box-icon size="20px" style={{ marginRight: '.4rem',}} name='envelope' type='solid' color='#ffffff' ></box-icon>
                            <span>
                                info@intellitech.ng
                            </span>
                        </p>

                </div>
                <QuickLink>
                    <h4>Quicklinks</h4>
                        <a href="" className="">Home</a>
                        <a href="" className="">Contact Us</a>
                        <a href="" className="">Products</a>
                        <a href="" className="">About Us</a>
                        <a href="" className="">Blog</a>
                </QuickLink>
                <QuickLink>
                    <h4>Services</h4>
                    <a href="" className="">Maintenance</a>
                    <a href="" className="">Training</a>
                    <a href="" className="">Consultancy</a>
                    <a href="" className="">Sales</a>
                    <a href="" className="">Software Development</a>
                </QuickLink>
                <NetworkContainer>
                    <div>
                        <h4>Network Design</h4>
                        <img src="assets/image11.svg" alt="" /> 
                    </div>
                </NetworkContainer>
            </ContainerLayout>
        </FooterContainer>
    )
}


export const FooterContainer = styled.div`
    background-color: #4D4D4D;

    p{
        border: 3px solid red;
        color: #fff;
        display; flex;
        align-items: center;
    }
    p span {
        border: 4px solid teal;
        font-size: 14px;
    }
    h4 {
        font-weight: 400;
        color: #fff;
    }
`

export const ContainerLayout = styled.div`
   max-width: 775px;
   margin: 0 auto;
   padding-top: 130px;
   padding-bottom: 90px;
   /* border: 3px solid red; */
   display: flex;
    gap: 4rem;
    
`

export const QuickLink = styled.div`
    h6 {
        color: #fff;
    }

     a {
        display: flex;
        gap: 30px;
        margin-bottom: 1rem;
        flex-direction: row;
         color: rgba(255, 255, 255, 0.8);
         /* gap: 5rem; */
         text-decoration: none;
         font-size: 14px;
     }
`
export const SocialLink = styled.div`
    
    border: 3px solid red;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const NetworkContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    div {
        margin-top: -3rem;
    }
`