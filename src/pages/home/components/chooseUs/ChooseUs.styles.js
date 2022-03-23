import styled from "styled-components"

export const ChooseWrap = styled.div`
    margin-top: 96px;
    margin-bottom: 50px;
    /* border: 3px solid red; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    div h3 {
        text-align: right;
        color: #0077B5;
    }

    div h1 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        color: #3D3D3D;
        Line-height: 51.78px
    }
`

export const SideIcon = styled.div`
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
`

export const SideText = styled.div`
    margin-left: 2.3rem;

     h2 {
        margin-top: -0.2rem;
        text-align: right;
        font-size: 24px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
        color: #3D3D3D;
    }
    p{
        margin-top: -0.5rem;
        text-align: right;
        color: #3D3D3D;
    }
`