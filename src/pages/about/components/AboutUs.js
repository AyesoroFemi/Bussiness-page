import styled from "styled-components"
import { Container } from "../../../components/navbar/Nav.styles"

export const AboutUs = () => {
    return (
        <Wrapper>
            <div>
                <h3>Who we are</h3>
                <p>
                    INTELLITECH is an information Technology Company, focused on providing optimal, Contemporary and Prospective ICT solutions in the World. <br /> <br />

                    INTELLITECH focuses on the following core areas; Sales of Computer Systems, Computer accessories, and gadgets; as well as configuring of Servers, Training, Consulting, Providing maintenance of System's and Softwares. <br /> <br />

                    INTELLITECH was incorporated in 2017, and has grown from a humble beginning to a renowned ICT solutions provider in Nigeria today, with nation-wide presence, and a branch network that includes the cities of Lagos, Abuja, Port Harcourt.
                </p>
            </div>
            <div>
                <img src="assets/Rectangle67.png" alt="" />
            </div>
        </Wrapper>
    )
}

export const Wrapper = styled(Container)`
    margin-top: 96px;
    margin-bottom: 96px;
    display: flex;
    gap: 5rem;

    h3 {
        color: #0077B5;

    }
    p{
        margin-top: 45px;
        color: #3D3D3D;
        letter-spacing: 0.005em;
        margin-right: 1rem;
    }
`