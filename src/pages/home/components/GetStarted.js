import styled from "styled-components"
import { Container } from "../../../components/navbar/Nav.styles"


export const GetStarted = () => {
    return (
        <ContentWrapper>
           <h3>
                Get started now
           </h3>
           <h1>
                Want us to collaborate on a project?
           </h1>
            <Button>
                <a href="#">
                    Get a Quote
                </a>
            </Button>
        </ContentWrapper>
    )
}

export const ContentWrapper = styled(Container)`
    background: #F2F8FB;
    max-width: 67.1rem;
    margin: 0 auto;
    padding: 40px 0;
    filter: drop-shadow(0px 155px 60px rgba(0, 0, 0, 0.15));

    h3 {
        color: #0077B5;
        text-align: center;
    }

    h1 {
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        color: #3D3D3D;
    }
`

export const Button = styled.div`
    width: 100px;
    margin: auto;
    padding: 17.5px 24px;
    border-radius: 10px;
    background-color: #0077B5;
    box-shadow: 4px 24px 45px -12px rgba(0, 119, 181, 0.15);

    a {
        text-decoration: none;
        color: #fff;
        font-weight: 600;
        color: #fff;
    }
`