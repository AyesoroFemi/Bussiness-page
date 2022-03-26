import styled from "styled-components"
import { LayoutWrapper } from "../../components/Layout";
import { Nav } from "../../components/navbar/Nav";
import { Container } from "../../components/navbar/Nav.styles"

export const Career = () => {
  return (
    <div>
      <Nav />
      <LayoutWrapper>
        <h1>Careers</h1>
        <p>
          We are always on the lookout for talented individuals to join our
          growing team.
        </p>
      </LayoutWrapper>
      <ImgWrapper>
        <img src="assets/Rectangle95.png" />
      </ImgWrapper>
    </div>
  );
};


export const ImgWrapper = styled(Container)`
   margin-top: 96px;
   margin-bottom: 96px;
   /* background-image: url("../../../assets/Rectangle95.png"); */
   border: 3px solid teal;

`
