import styled from "styled-components"
import { Container } from "../../../components/navbar/Nav.styles";


// import Data  from "../../../Data";

export const BlogLayout = () => {
  
    const Data = [
        {
          img: "assets/Rectangle33.png",
          title: "Software Development",
          text: "In the modern business world, a website is a crucial asset. We can ensure your website represents your brand values. From simple brochure websites to complex web apps, our skilled design and development team can deliver a solution to help achieve your business ambitions.",
        },
        {
            img: "assets/Rectangle34.png",
            title: "Computer Maintenance",
            text: "INTELLITECH provide on-site and off-site computer repair and networking services for businesses, schools and residential customers in and around, whether your computer isn’t running as well as it used to, or if it’s physically damaged, we’re the computer specialists to turn to for quality and timely results.",
          },
          {
            img: "assets/Rectangle35.png",
            title: "Network  Design",
            text: "Here at INTELLITECH we specialise in providing bespoke IT network services that are designed and maintained to suit your company’s requirements. Our team of expert network technicians will consider all the relevant factors during the design process and will offer a comprehensive network design service, our network team can design and install all types of network including LAN, WAN, wireless and structured cable networks.",
          },
          {
            img: "assets/Rectangle37.png",
            title: "Training",
            text: "We deliver true Traning, focusing on strategic decisions and practical actions tailored to our clients' unique reality. We engage all levels of an organization from day one, building momentum and capabilities to sustain the success.",
          },
          {
            img: "assets/Rectangle38.png",
            title: "Computer & Equipment Sales",
            text: "We keep many items in stock, and can order anything else you need, including computers, flat-screen displays, networking equipment, and Computer Accessories; Hard Disk, Ram, Printer Cable, Gadget; Printers, Sanner, POS, Access Control, IP Cameras etc.",
          },
          {
            img: "assets/Rectangle39.png",
            title: "Consultancy",
            text: "Companies and organisations are increasingly reliant on technology and can often need a helping hand. Whether you are moving office, expanding your business, installing a new servers, internet, database or email system, our team of IT consultants can deliver on the day you need it.",
          },
      ];
  return (
    <DataWrapper>
        {Data.map((data) => (
            <div key="data">
                <img src={data.img} alt="" />
                <h2>{data.title}</h2>
                <p>{data.text}</p>
            </div>
        ))}
    </DataWrapper>
  );
};


export const DataWrapper = styled(Container)`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    margin-top: 96px;
    margin-bottom: 96px;

    h2 {
        font-size: 24px;
        color: #3D3D3D;
        font-family: 'Montserrat', sans-serif;
        font-weight: 600;
    }
     
    p{
        color: #3D3D3D;
        letter-spacing: 0.005em;
    }
`