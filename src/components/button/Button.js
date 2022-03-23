import styled from "styled-components"

export const Button = ({ children }) => {
    return (
        <Buttons>
            { children }
        </Buttons>
    )
}

export const Buttons = styled.div`
    background: #0077B5;
    color: #fff;
    border-radius: 10px;
    padding: 12px 16px 12px 16px;
    width: 144px;
    text-align: center;
    font-weight: 700;
    box-shadow: 4px 24px 45px -12px rgba(0, 119, 181, 0.15);
`