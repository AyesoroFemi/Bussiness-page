import { Link } from "react-router-dom";

import {
  FooterContainer,
  ContainerLayout,
  SocialLink,
  QuickLink,
  NetworkContainer,
} from "./Footer.styles";

export const Footer = () => {
  return (
    <FooterContainer>
      <ContainerLayout>
        <div>
          <h4>INTELLITECH © 2022</h4>
          <SocialLink>
            <Link to="#">
              <box-icon
                size="22px"
                name="facebook"
                type="logo"
                color="#ffffff"
              ></box-icon>
            </Link>
            <Link to="#">
              <box-icon
                size="22px"
                name="instagram"
                type="logo"
                color="#ffffff"
              ></box-icon>
            </Link>
            <Link to="#">
              <box-icon
                size="22px"
                name="twitter"
                type="logo"
                color="#ffffff"
              ></box-icon>
            </Link>
            <Link to="#">
              <box-icon
                size="22px"
                name="linkedin"
                type="logo"
                color="#ffffff"
              ></box-icon>
            </Link>
            <Link to="#">
              <box-icon
                size="22px"
                name="youtube"
                type="logo"
                color="#ffffff"
              ></box-icon>
            </Link>
          </SocialLink>
          <p>
            <box-icon
              size="20px"
              name="phone"
              type="solid"
              color="#ffffff"
            ></box-icon>
            <span>+234-809-022-4422</span>
          </p>
          <p>
            <box-icon
              size="20px"
              style={{ marginRight: ".4rem" }}
              name="envelope"
              type="solid"
              color="#ffffff"
            ></box-icon>
            <span>info@intellitech.ng</span>
          </p>
        </div>
        <QuickLink>
          <h4>Quicklinks</h4>
          <Link to="" className="">
            Home
          </Link>
          <Link to="" className="">
            Contact Us
          </Link>
          <Link to="" className="">
            Products
          </Link>
          <Link to="" className="">
            About Us
          </Link>
          <Link to="" className="">
            Blog
          </Link>
        </QuickLink>
        <QuickLink>
          <h4>Services</h4>
          <Link to="" className="">
            Maintenance
          </Link>
          <Link to="" className="">
            Training
          </Link>
          <Link to="" className="">
            Consultancy
          </Link>
          <Link to="" className="">
            Sales
          </Link>
          <Link to="" className="">
            Software Development
          </Link>
        </QuickLink>
        <NetworkContainer>
          <div>
            <h4>Network Design</h4>
            <img src="assets/image11.svg" alt="" />
          </div>
        </NetworkContainer>
      </ContainerLayout>
    </FooterContainer>
  );
};
