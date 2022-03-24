import styled from "styled-components"
import { Container } from "../../../components/navbar/Nav.styles"


export const ClientSession = () => {
    return (
        <ClientWrapper>
            <Container>
                <div>
                    <h3>Our Clients</h3>
                    <h1>Some of our trusted clients</h1>
                    <ImageContainer>
                        <img src="assets/image6.svg" alt="" />
                        <img src="assets/image7.svg" alt="" />
                        <img src="assets/image10.svg" alt="" />
                        <img src="assets/image9.svg" alt="" />
                        <img src="assets/image8.svg" alt="" />
                    </ImageContainer>
                </div>
            </Container>
        </ClientWrapper>
    )
}

export const ClientWrapper = styled.div`
    background: #fff;
    margin:96px 0;

    h3 {
        color: #0077B5;
    }
    div h1 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        color: #3D3D3D;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
`