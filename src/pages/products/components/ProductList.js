import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../../components/GetStarted";
import { Container } from "../../../components/navbar/Nav.styles";

export const ProductList = () => {
  return (
    <ProductContainer>
      <div>
        <img src="assets/image12.png" alt="" />
        <h1>IntelliSales POS</h1>
        <p>
          IntelliSales POS is a sales management system we developed that is
          very customizable to meet your sales demand be it supermarket, grocery
          store, pharmacy and other sales.
        </p>
        <Button>
          <Link to="#">Read more</Link>
        </Button>
      </div>
      <div>
        <img src="assets/image13.png" alt="" />
        <h1>IntelliPro</h1>
        <p>
          IntelliPro is an inventory management system developed to manage your
          products & stocks for industry and bulk product dispatch services.
          Highly robust in functionality but very user friendly and efficient.
        </p>
        <Button>
          <Link to="#">Read more</Link>
        </Button>
      </div>
      <div style={{marginTop: "100px"}}>
        <img src="assets/image14.png" alt="" />
        <h1>PerfectStay</h1>
        <p>
          PerfectStay is our advancehotel management system with ERP that is
          geared up to meet the demands of running a modern Hotel, Restaurant,
          and bar. It is very friendly to use and manage all operations of a
          Hotel very effectively.
        </p>
        <Button>
          <Link to="#">Read more</Link>
        </Button>
      </div>
      <div style={{marginTop: "100px"}}> 
        <img src="assets/image16.png" alt="" />
        <h1>IntelliSense</h1>
        <p>
          IntelliSense is a school management system we've developed to
          specially ease the stress and increase the efficiency of school
          administrative process. It manages both students and teachers
          information, student assessment and exam records, class and lecture
          schedules.
        </p>
        <Button>
          <Link to="#">Read more</Link>
        </Button>
      </div>
    </ProductContainer>
  );
};

export const ProductContainer = styled(Container)`
  margin-top: 96px;
  margin-bottom: 96px;
  margin-left: 184px;
  margin-right: 184px;
  display: grid;
  grid-template-columns: 39% 40%;
  justify-content: space-between;
  gap: 4rem;

    h1{
        color: #3D3D3D;
        font-size: 2rem;
        color: #3D3D3D;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
    }

    p{
        color: #3D3D3D;
        letter-spacing: 0.005em;
    }
`;
