import styled from "styled-components";

export const Container = styled.div`
  margin: 0 4.5rem;

  @media screen and (max-width: 579px) {
    margin: 0 2.5rem;
  }
`;
export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 991px) {
    margin-top: 1rem;
    margin-bottom: 1rem;
    /* border: 3px solid orange; */
  }
`;
export const NavItem = styled.div`
  /* border: 3px solid red; */
  a {
    margin-right: 3rem;
    color: #4f4f4f;
    text-decoration: none;
    font-weight: 700;
    font-size: 18px;
  }
`;

export const Button = styled.div`
  margin: 1.7rem 0;
  padding: 1rem 1.5rem;
  background: #0077b5;
  color: #fff;
  border-radius: 10px;
  font-weight: 700;
  box-shadow: 4px 24px 45px -12px rgba(0, 119, 181, 0.15);

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 991px) {
    display: none;
  }

  @media screen and (max-width: 579px) {
  }
`;
