import styled from "styled-components"
import { Button } from "../../../../components/navbar/Nav.styles"


export const SessionWrapper = styled.div`
    background: #F2F2F2;

`

export const ImageCard = styled.div`
    margin: 107px 0;

    @media screen and (max-width: 991px) {
        margin-top: 1rem;
        img {
        height: 100%;
        width: 100%;
        }
    }

    
`

export const AboutCard = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 9.1rem;

    @media screen and (max-width: 991px) {
       display: flex;
       flex-direction: column;
    }
 
    /* @media screen and (max-width: 579px) {
        grid-template-columns: 1fr;
        gap: 2rem;
    } */
    

    div:nth-of-type(1){
        /* width:39.5rem; */
        margin-top: 132px;
    }
    div h1{
        font-family: 'Montserrat', sans-serif;
        font-size: 2rem;
        font-weight: 600;
        color: #3D3D3D;

    }
    div h3{
        color: #0077B5;
        font-size: 20px;
    }
    p{
        font-weight: 400;
    }
`

export const LearnButton = styled(Button)`
    width: 100px;
    border: 3px solid red;
`
