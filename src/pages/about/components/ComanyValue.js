import styled from "styled-components";
import { Container } from "../../../components/navbar/Nav.styles";

export const CompanyValue = () => {
  return (
    <ValueWrapper>
      <div>
        <h3 className="first">Our Vision</h3>
        <p>
          IT is our undoubting vision to be the No.1 Tech Company in West Africa
          with cutting edge technology of global standard. To be the top IT
          consultant company for institutions, organizations, oil companies and
          government. Our destination is simply global!.
        </p>
      </div>
      <div>
        <h3 className="second">Our Mission</h3>
        <p>
          To bring IT to the common man in a flexible and adaptable standard by
          introducing innovative technology usable by the young as well as the
          elderly, without compromising efficiency and quality.
        </p>
      </div>
      <div>
        <h3 className="third">Core Values</h3>
        <p>
          We commit to excellent service and we strive to provide the best
          technology solutions. Our aim is to deliver consistently every day,
          and by doing so to earn our clients' trust and respect.
        </p>
      </div>
      <div>
        <h3 className="four">Our Goal</h3>
        <p>
          ICT is dynamic. Hence, our goal is to ever remain relevant in the
          field of ICT through continuous adaptive research and innovation.
        </p>
      </div>
    </ValueWrapper>
  );
};

export const ValueWrapper = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* margin-bottom: 2rem; */
  gap: 2rem;
  margin-bottom: 96px;


  div {
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.15);
    padding-left: 24px;
    padding-right: 24px;
    height:351px;
    border-radius: 10px;
  }

  div .first{
    color: #2F80ED;
  }

  div .second{
    color: #F2994A
  }

  div .third{
    color: #9B51E0;
  }

  div .four{
    color: #219653;
  }

  
  h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 24px;
  }

  

  p {
    color: #3d3d3d;
    letter-spacing: 0.005em;
  }
`;
