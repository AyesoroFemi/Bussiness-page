import styled from "styled-components"

export const Layout = ({ children }) => {
    return (
        <LayoutWrapper>
             {children}
        </LayoutWrapper>
    )
}

export const LayoutWrapper = styled.div`
    background-color: #F2F8FB;
    border: 0.1px solid #fff;

    h1 {
        text-align: center;
        color: #0077B5;
        font-size: 48px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
    }
    p{
        text-align: center;
        margin-bottom: 48px;
        color: #3D3D3D;
        letter-spacing: 0.005em;
        font-weight: 400;
    }
`