import styled from "styled-components"

export const CardSession = styled.div`
    margin: 6.6rem 12.8rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 4rem;

    @media screen and (max-width: 991px) {
        grid-template-columns: 1fr;
         gap: 2rem;
    }

    @media screen and (max-width: 579px) {
        margin: 6.6rem 2.5rem;
        grid-template-columns: 1fr;
        gap: 2rem;

        
    }

    h3 {
        color:#3D3D3D;
        font-size: 20px;
        height: 50px;
    }

    p {
        color: rgba(79, 79, 79, 1);
        margin-top: 2rem 0;
        max-height: 200px;
    }

    a {
         margin-top: 2rem;
         text-decoration: none;
     }
`