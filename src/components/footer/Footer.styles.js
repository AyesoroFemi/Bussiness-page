import styled from "styled-components"


export const FooterContainer = styled.div`
background-color: #4D4D4D;

p{
    border: 3px solid red;
    color: #fff;
    display: flex;
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

@media screen and (max-width: 991px) {
        margin: 0 2.5rem;
       display: flex;
       flex-wrap: wrap;
    }


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