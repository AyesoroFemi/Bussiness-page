import styled from "styled-components"
import { Container } from "../../../components/navbar/Nav.styles";
import { TraningList } from "./TrainingList";

export const Traning = () => {
  return (
    <>
      <Wrapper>
        <h1>Training List</h1>
      </Wrapper>
      <TraningList/>
    </>
  );
};

export const Wrapper = styled(Container)`
    h1 {
        color: #0077B5;
        font-size: 2rem;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
    }
`
