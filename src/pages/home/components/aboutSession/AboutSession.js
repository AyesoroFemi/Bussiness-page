
import { Container } from "../../../../components/navbar/Nav.styles"
import { AboutCard, LearnButton, SessionWrapper, ImageCard } from './AboutSession.styles'

export const AboutSession = () => {
  return (
    <SessionWrapper>
        <Container>
            <AboutCard>
                <div>
                <h3>About Us</h3>
                <h1>Technology with a human face</h1>
                <p>
                    INTELLITECH is an information Technology Company, focused on
                    providing optimal, Contemporary and Prospective ICT solutions in the
                    World. <br /> <br />
                    We focus on the following core areas; Sales of Computer Systems,
                    Computer accessories, and gadgets; as well as configuring of
                    Servers, Training, Consulting, Providing maintenance of System's and
                    Softwares.
                </p>
                    <LearnButton>
                        Learn More
                    </LearnButton>
                </div>
                <ImageCard>
                    <img src="assets/Rectangle.jpg" alt="" />
                </ImageCard>
            </AboutCard>
        </Container>
    </SessionWrapper>
  );
};

